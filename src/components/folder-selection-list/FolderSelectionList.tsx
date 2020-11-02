import React, { useState, useRef, useCallback, FunctionComponent, MutableRefObject } from 'react';
import { useTextInput } from '../../hooks/useTextInput';
import Button, { ButtonType } from '../atomic-components/Button';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import EditFolderRow from './EditFolderRow';
import FolderListItem from './FolderListItem';
import Styles from '../../style/Styles';
import styled from 'styled-components';
import { Folders } from '../../types/Folders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const strings = {
    displayName: 'Folders',
    btn1: 'New Folder',
    btn2: 'Reorder',
    search: 'Search'
}

type FolderSelectionListProps = {
    folders: Folders
    order: string[]
    selectedFolder: string
    selectFolder: (folder: string) => void
    swapUp: (id: string) => void
    swapDown: (id: string) => void
    isEditable: boolean
    isReordering: boolean
    acceptReordering: () => void
    cancelReordering: () => void
    setEditableTo: (isEditable: boolean) => void
    renameFolder: (id: string, newName: string) => boolean
    setReorderingTo: (isReordering: boolean) => void
    addNewFolder: (folderName: string) => boolean
    onDelete: (id: string) => void
}

const Container = styled.div`
        padding: 32px 0 16px 0;
        max-width: 377px;
        border-radius: 4px;
        margin: 40px;
        height: 75vh;
        background-color: #FFFFFF;
        box-shadow: 0 2px 3px 1px rgba(0,0,0,.17);
        display: flex;
        flex-direction: column;
        align-items: stretch;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 32px; 
    padding-right: 32px;
`;

const Body = styled.div`
    margin-right: 2;
    overflow-y: scroll;
    height: 10;
    flex-grow: 1;
`;


const ScrollBody = styled.div``;

const DisplayName = styled.div`
    color: #4D4D4D;
    font-size: 24px;
`;

const Hr = styled.hr`
    margin-left: 32px; 
    width: 100px; 
    border-left: 0;
    border-right: 0; 
    border-bottom: 0; 
    border-top: 1px solid gray;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 33px;

`;

const TmpSearchBar = styled.input`
    margin: 16px 32px 16px 32px;
    padding: 6px 1px 4px 16px;
    border-radius: 4px;
    background-color: #FAFAFA;
    border: 0;
    box-shadow: 0 1px 4px #cccccc;
    width: 300px;
    font-size: 20px;
    ::placeholder {
        color: #4D4D4D;
        opacity: 1
    }
    :focus {
        outline: none;
        padding: 5px 0 3px 15px;
        border: 1px solid #E5E5E5;
    }
`;

const FolderSelectionList: FunctionComponent<FolderSelectionListProps> = ({
    folders,
    order,
    selectFolder,
    isEditable,
    selectedFolder,
    isReordering,
    swapUp,
    swapDown,
    acceptReordering,
    cancelReordering,
    setEditableTo,
    setReorderingTo,
    renameFolder,
    addNewFolder,
    onDelete,
}: FolderSelectionListProps) => {
    const {
        ref,
        isAddingNewFolder,
        bindSearchBar,
        searchValue,
        setToAddingNewFolder,
        setToNormal,
        acceptOrder,
        rejectOrder,
        setToReordering,
    } = useFolderSelectList({
        setEditableTo,
        setReorderingTo,
        acceptReordering,
        cancelReordering,
    });

    return (
        <Container>
            <Header>
                <DisplayName>
                    {strings.displayName}
                </DisplayName>
                {isReordering ? (
                    <ButtonGroup>
                        <FontAwesomeIcon 
                            icon={faCheckCircle} 
                            color={Styles.color.green}
                            onClick={acceptOrder} 
                        />
                        <FontAwesomeIcon
                            icon={faTimesCircle}
                            color={Styles.color.gray.xx_dark}
                            onClick={rejectOrder}
                            style={{marginLeft: 4}}
                        />
                    </ButtonGroup>
                ) : (
                    <ButtonGroup>
                        <Button
                            buttonType={ButtonType.SMALL_GREEN}
                            text={"New Folder"}
                            disabled={isAddingNewFolder || !isEditable}
                            onClick={setToAddingNewFolder}
                        />
                        <Button
                            buttonType={ButtonType.BARE}
                            text={"Reorder"}
                            disabled={isAddingNewFolder || !isEditable}
                            onClick={setToReordering}
                        />
                    </ButtonGroup>   
                )}
            </Header>
            <TmpSearchBar
                placeholder={"Search"} 
                {...bindSearchBar}
            />
            <Body>
                <ScrollBody>
                    {order.map((id) => {
                        if (folders[id].name.toLowerCase().includes(searchValue.toLowerCase())) {
                            return (
                                <FolderListItem 
                                    key={folders[id].name}
                                    setSelectedFolder={() => selectFolder(id)}
                                    folder={folders[id]}
                                    isEditable={isEditable && folders[id].editable}
                                    tradeUp={() => swapUp(id)}
                                    tradeDown={() => swapDown(id)}
                                    isSelected={selectedFolder === id}
                                    reordering={isReordering}
                                    setEditableTo={setEditableTo}
                                    renameFolder={renameFolder}
                                    onDelete={() => onDelete(id)}
                                />
                            );
                        }
                        return null;
                    })}
                    {isAddingNewFolder && (
                        <EditFolderRow
                            initial=''
                            showError={false}
                            errorText={'That folder name already exists'}
                            onAccept={(value) => {
                                addNewFolder(value);
                                setToNormal(); 
                            }}
                            onCancel={setToNormal}
                        />
                    )}

                    {/* TODO: so messy... this needs to be fixed */}
                    <Hr /> 
                    <div style={{ color: Styles.color.gray.dark, marginLeft: 32}}>Recently Deleted</div>
                    <div ref={ref} />
                </ScrollBody>
            </Body>
        </Container>
    );
}

const useFolderSelectList = ({
    setEditableTo, 
    setReorderingTo,
    acceptReordering,
    cancelReordering,
}:{
    setEditableTo: (isEditable: boolean) => void
    setReorderingTo: (isReordering: boolean) => void
    acceptReordering: () => void
    cancelReordering: () => void
}) => {
    const [isAddingNewFolder, setAddingNewFolderTo] = useState(false);
    const { value, bind } = useTextInput('');
    
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    const setToNormal = useCallback(() => {
        setReorderingTo(false);
        setAddingNewFolderTo(false);
        setEditableTo(true);
    }, [setEditableTo]);

    const acceptOrder = useCallback(() => {
        acceptReordering();
        setToNormal();
    }, []);

    const rejectOrder = useCallback(() => {
        cancelReordering();
        setToNormal();
    }, []);

    const setToReordering = useCallback(() => {
        setReorderingTo(true);
        setAddingNewFolderTo(false);
        setEditableTo(false);
    }, [setEditableTo]);

    const setToAddingNewFolder = () => {
        setReorderingTo(false);
        setAddingNewFolderTo(true);
        setEditableTo(false);
        ref.current.scrollIntoView(); // { behavior: 'smooth'} fails to scroll. Workaround needed.
    };

    return {
        ref,
        isAddingNewFolder,
        bindSearchBar: bind,
        searchValue: value,
        setToAddingNewFolder,
        setToNormal,
        setToReordering,
        acceptOrder,
        rejectOrder 
    }
}



export default FolderSelectionList;