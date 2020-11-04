import React, { FunctionComponent } from 'react';
import Button from '../atomic-components/Button';
import { ButtonType } from '../../types/ButtonType';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import EditFolderRow from './EditFolderRow';
import FolderListItem from './FolderListItem';
import Styles from '../../style/Styles';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFolderSelectionList, FolderSelectionListProps } from '../../hooks/component-hooks/useFolderSelectionList';

const strings = {
    displayName: 'Folders',
    btn1: 'New Folder',
    btn2: 'Reorder',
    search: 'Search'
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

const FolderSelectionList = (props: FolderSelectionListProps) => {
    const binding = useFolderSelectionList({
        setEditableTo: props.setEditableTo,
        setReorderingTo: props.setReorderingTo,
        acceptReordering: props.acceptReordering,
        cancelReordering: props.cancelReordering,
    });

    return (
        <Container>
            <Header>
                <DisplayName>
                    {strings.displayName}
                </DisplayName>
                {props.isReordering ? (
                    <ButtonGroup>
                        <FontAwesomeIcon 
                            icon={faCheckCircle} 
                            color={Styles.color.green}
                            onClick={binding.acceptOrder} 
                        />
                        <FontAwesomeIcon
                            icon={faTimesCircle}
                            color={Styles.color.gray.xx_dark}
                            onClick={binding.rejectOrder}
                            style={{marginLeft: 4}}
                        />
                    </ButtonGroup>
                ) : (
                    <ButtonGroup>
                        <Button
                            buttonType={ButtonType.SMALL_GREEN}
                            text={"New Folder"}
                            disabled={binding.isAddingNewFolder || !props.isEditable}
                            onClick={binding.setToAddingNewFolder}
                        />
                        <Button
                            buttonType={ButtonType.BARE}
                            text={"Reorder"}
                            disabled={binding.isAddingNewFolder || !props.isEditable}
                            onClick={binding.setToReordering}
                        />
                    </ButtonGroup>   
                )}
            </Header>
            <TmpSearchBar
                placeholder={"Search"} 
                {...binding.bindSearchBar}
            />
            <Body>
                <ScrollBody>
                    {props.order.map((id) => {
                        if (props.folders[id].name.toLowerCase().includes(binding.searchValue.toLowerCase())) {
                            return (
                                <FolderListItem 
                                    key={props.folders[id].name}
                                    setSelectedFolder={() => props.selectFolder(id)}
                                    folder={props.folders[id]}
                                    isEditable={props.isEditable && props.folders[id].editable}
                                    tradeUp={() => props.swapUp(id)}
                                    tradeDown={() => props.swapDown(id)}
                                    nameIsUniq={props.nameIsUniq}
                                    isSelected={props.selectedFolder === id}
                                    reordering={props.isReordering}
                                    setEditableTo={props.setEditableTo}
                                    renameFolder={(name: string) => props.renameFolder(id, name)}
                                    onDelete={() => props.onDelete(id)}
                                />
                            );
                        }
                        return null;
                    })}
                    {binding.isAddingNewFolder && (
                        <EditFolderRow
                            initial=''
                            showError={false}
                            errorText={'That folder name already exists'}
                            onAccept={(value) => {
                                props.addNewFolder(value);
                                binding.setToNormal(); 
                            }}
                            onCancel={binding.setToNormal}
                        />
                    )}

                    {/* TODO: so messy... this needs to be fixed */}
                    <Hr /> 
                    <div style={{ color: Styles.color.gray.dark, marginLeft: 32}}>Recently Deleted</div>
                    <div ref={binding.ref} />
                </ScrollBody>
            </Body>
        </Container>
    );
}


export default FolderSelectionList;