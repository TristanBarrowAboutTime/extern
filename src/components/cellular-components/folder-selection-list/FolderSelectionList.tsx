import * as  React from 'react';
import Button from '../../atomic-components/Button';
import { ButtonType } from '../../../types/ButtonType';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import EditFolderRow from './EditFolderRow';
import FolderListItem from './FolderListItem';
import SearchBar from '../../atomic-components/SearchBar';
import Styles from '../../../style/Styles';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFolderSelectionList, FolderSelectionListProps } from '../../../hooks/component-hooks/folder-selection-list/useFolderSelectionList';

const strings = {
    displayName: 'Folders',
    btn1: 'New Folder',
    btn2: 'Reorder',
    search: 'Search'
}

const Container = styled.div`
    padding: 32px 0 16px 0;
    width: 380px;
    border-radius: 4px;
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

const Hr = styled.div`
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 32px; 
    height: 1px;
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

const SearchContainer = styled.div`
    padding: 16px 32px 16px 32px;
`;

const HoverableIcon = styled.div`
    :hover {
        cursor: pointer;
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
                        <HoverableIcon>
                            <FontAwesomeIcon 
                                icon={faCheckCircle} 
                                color={Styles.color.green}
                                onClick={binding.acceptOrder} 
                            />
                        </HoverableIcon>
                        <HoverableIcon>
                            <FontAwesomeIcon
                                icon={faTimesCircle}
                                color={Styles.color.gray.xx_dark}
                                onClick={binding.rejectOrder}
                                style={{marginLeft: 4}}
                            />
                        </HoverableIcon>
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
            <SearchContainer>
                <SearchBar {...binding.bindSearchBar}/>
            </SearchContainer>
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
                    <div style={{ color: Styles.color.gray.medium, marginLeft: 32}}>Recently Deleted</div>
                    <div ref={binding.ref} />
                </ScrollBody>
            </Body>
        </Container>
    );
}


export default FolderSelectionList;