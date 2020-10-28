import React, { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss'; 
import Button, { ButtonType } from './atomic-components/Button';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import EditFolderBar from './EditFolderBar';
import FolderListItem from './FolderListItem';
import Styles from '../style/WMStyles';
import { FolderId } from '../types/FolderId';
import { useFolderSelectList } from '../hooks/component-hooks/useFolderSelectionList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const strings = {
    displayName: 'Folders',
    btn1: 'New Folder',
    btn2: 'Reorder',
    search: 'Search'
}

type FolderSelectionListProps = {
    folders: FolderId[]
    selectedFolder: FolderId
    selectFolder: (folder: FolderId) => void
    isEditable: boolean
    setEditableTo: (isEditable: boolean) => void
    renameFolder: (oldName: string, newName: string) => boolean
    addNewFolder: (folderName: string) => boolean
    onDelete: (id: number) => void
}

// const initialOrder = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

const FolderSelectionList: FunctionComponent<FolderSelectionListProps> = ({
    folders,
    selectFolder,
    isEditable,
    selectedFolder,
    setEditableTo,
    renameFolder,
    addNewFolder,
    onDelete,
}: FolderSelectionListProps) => {

    const {
        ref,
        isReordering,
        isAddingNewFolder,
        bindSearchBar,
        searchValue,
        setToAddingNewFolder,
        setToNormal,
        setToReordering,
    } = useFolderSelectList(setEditableTo);

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.displayName}>
                    {strings.displayName}
                </div>
                {isReordering ? (
                    <div className={classes.buttonGroup}>
                        <FontAwesomeIcon 
                            icon={faCheckCircle} 
                            color={Styles.color.green}
                            onClick={setToNormal}
                        />
                        <FontAwesomeIcon
                            icon={faTimesCircle}
                            color={Styles.color.gray.xx_dark}
                            onClick={setToNormal}
                            style={{marginLeft: 4}}
                        />
                    </div>
                ) : (
                    <div className={classes.buttonGroup}>
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
                    </div>   
                )}
            </div>
            <input 
                className={classes.searchBar} 
                placeholder={"Search"} 
                {...bindSearchBar}
            />
            <div className={classes.body}>
                <div className={classes.scrollBody}>
                    {folders.map((folder) => {
                        if (folder.name.toLowerCase().includes(searchValue.toLowerCase())) {
                            return (
                                <FolderListItem 
                                    key={folder.name}
                                    setSelectedFolder={selectFolder}
                                    folder={folder}
                                    isEditable={isEditable}
                                    isSelected={selectedFolder.name === folder.name}
                                    reordering={isReordering}
                                    setEditableTo={setEditableTo}
                                    renameFolder={renameFolder}
                                    onDelete={onDelete}
                                />
                            );
                        }
                        return null;
                    })}
                    {isAddingNewFolder && (
                        <>
                            <div></div>
                            <div className={classes.newFolderInput}>
                                <EditFolderBar
                                    initial=''
                                    onAccept={(value) => {
                                        addNewFolder(value);
                                        setToNormal(); 
                                    }}
                                    onCancel={setToNormal}
                                />
                            </div>
                        </>
                    )}

                    {/* TODO: so messy... this needs to be fixed */}
                    <hr style={{ marginLeft: 32, width: 100, borderLeft: 0, borderRight: 0, borderBottom: 0, borderTop: '1 solid gray'}} />
                    <div style={{ color: Styles.color.gray.dark, marginLeft: 32}}>Recently Deleted</div>
                    <div ref={ref} />
                </div>
            </div>
        </div>
    );
}

const useStyles = createUseStyles({
    container: {
        padding: {
            top: 32,
            bottom: 16,
            left: 0,
            right: 0
        },
        maxWidth: 377,
        borderRadius: 4,
        margin: '40px',
        height: '75vh',
        backgroundColor: '#FFFFFF',
        boxShadow: {
            x: 0,
            y: 2,
            blur: 3,
            spread: 1,
            color: 'rgba(0,0,0,0.17)',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 33,
    },
    header: {
        display: 'flex',
        padding: {left: 32, right: 32},
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    displayName: {
        color: '#4D4D4D',
        'font-size': '24px'
    },
    searchBar: {
        margin: {
            top: 16,
            bottom: 16,
            left: 32,
            right: 32,
        },
        padding: {
            left: 16, right: 1, top: 6, bottom: 4
        },
        borderRadius: 4,
        backgroundColor: '#FAFAFA',
        border: 0,
        boxShadow: {
            x: 0, y: 1, blur: 4, color: '#cccccc'
        },
        width: 300, 
        'font-size': 20,
        '&::placeholder': {
            color: '#4D4D4D',
            opacity: 1,
        },
        '&:focus': {
            outline: 'none',
            padding: {
                left: 15, right: 0, top: 5, bottom: 3
            },
            border: {
                width: 1,
                color: '#E5E5E5',
                style: 'solid'
            }
        }
    },
    body: {
        marginRight: 2,
        'overflow-y': 'scroll',
        height: 10,
        flexGrow: 1
    },
    scrollBody: {

    },
    newFolderInput: {
        marginRight: 32
    }
});

export default FolderSelectionList;