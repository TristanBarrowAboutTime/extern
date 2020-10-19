import React, { FunctionComponent, useState, useRef, MutableRefObject } from 'react';
import { createUseStyles } from 'react-jss'; 
import { useTextInput } from '../hooks/useTextInput';
import WMButton, { ButtonType } from './atomic-components/WMButton';
import WMEditFolderBar from './WMEditFolderBar';
import WMFolderListItem, { FolderId } from './WMFolderListItem';

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
    renameFolder: (oldName: string, newName: string) => void
    addNewFolder: (folderName: string) => void
}

const FolderSelectionList: FunctionComponent<FolderSelectionListProps> = ({
    folders,
    selectFolder,
    isEditable,
    selectedFolder,
    setEditableTo,
    renameFolder,
    addNewFolder,
}: FolderSelectionListProps) => {

    const classes = useStyles();
    const [reordering, setReorderingTo] = useState(false);
    const [addingNewFolder, setAddingNewFolderTo] = useState(false);
    const { value:searchValue, bind:bindSearchBar } = useTextInput('');
    
    const bottomRef = useRef() as MutableRefObject<HTMLDivElement>;
    
    const setToNormal = () => {
        setReorderingTo(false);
        setAddingNewFolderTo(false);
        setEditableTo(true);
    }
    const setToReordering = () => {
        setReorderingTo(true);
        setAddingNewFolderTo(false);
    }
    const setToAddingNewFolder = () => {
        setReorderingTo(false);
        setAddingNewFolderTo(true);
        setEditableTo(false);
        bottomRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.displayName}>
                    {strings.displayName}
                </div>
                <div>
                    <WMButton
                        buttonType={ButtonType.SMALL_GREEN}
                        text={"New Folder"}
                        disabled={reordering && addingNewFolder}
                        onClick={setToAddingNewFolder}
                    />
                    <WMButton
                        buttonType={ButtonType.NAKED}
                        text={"Reorder"}
                        disabled={reordering && addingNewFolder}
                        onClick={setToReordering}
                    />
                </div>
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
                                <WMFolderListItem 
                                    key={folder.name}
                                    setSelectedFolder={selectFolder}
                                    folder={folder}
                                    isEditable={isEditable}
                                    isSelected={selectedFolder.name === folder.name}
                                    reordering={false}
                                    setEditableTo={setEditableTo}
                                    renameFolder={renameFolder}
                                    onDelete={() => {}}
                                />
                            );
                        }
                        return null;
                    })}
                    {addingNewFolder && (
                        <div className={classes.newFolderInput}>
                            <WMEditFolderBar
                                initial=''
                                onAccept={(value) => {
                                    addNewFolder(value);
                                    setToNormal(); 
                                }}
                                onCancel={setToNormal}
                            />
                        </div>
                    )}
                    <div style={{height: '22px'}} ref={bottomRef} />
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