import React, { FunctionComponent, useState, useRef, MutableRefObject } from 'react';
import { createUseStyles } from 'react-jss'; 
import { useTextInput } from '../hooks/useTextInput';
import WMButton, { ButtonType } from './atomic-components/WMButton';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import WMEditFolderBar from './WMEditFolderBar';
import WMFolderListItem from './WMFolderListItem';
import WMCircleIcon from './atomic-components/WMCircleIcon';
import WMStyles from '../style/WMStyles';
import { FolderId } from '../types/FolderId';

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

    const classes = useStyles();
    const [reordering, setReorderingTo] = useState(false);
    const [addingNewFolder, setAddingNewFolderTo] = useState(false);
    // const [folderOrder, setFolderOrder] = useState(initialOrder);
    // const [tmpFolderOrder, setTmpFolderOrder] = useState([]);
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
        setEditableTo(false);
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
                {reordering ? (
                    <div className={classes.buttonGroup}>
                        <WMCircleIcon 
                            icon={faCheck} 
                            size={10}
                            bgColor={WMStyles.color.green}
                            onPress={setToNormal}
                        />
                        <WMCircleIcon
                            icon={faTimes}
                            marginLeft={7}
                            onPress={setToNormal}
                        />
                    </div>
                ) : (
                    <div className={classes.buttonGroup}>
                        <WMButton
                            buttonType={ButtonType.SMALL_GREEN}
                            text={"New Folder"}
                            disabled={addingNewFolder || !isEditable}
                            onClick={setToAddingNewFolder}
                        />
                        <WMButton
                            buttonType={ButtonType.NAKED}
                            text={"Reorder"}
                            disabled={addingNewFolder || !isEditable}
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
                                <WMFolderListItem 
                                    key={folder.name}
                                    setSelectedFolder={selectFolder}
                                    folder={folder}
                                    isEditable={isEditable}
                                    isSelected={selectedFolder.name === folder.name}
                                    reordering={reordering}
                                    setEditableTo={setEditableTo}
                                    renameFolder={renameFolder}
                                    onDelete={onDelete}
                                    initialHover={false}
                                />
                            );
                        }
                        return null;
                    })}
                    {addingNewFolder && (
                        <>
                        <div></div>
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
                        </>
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