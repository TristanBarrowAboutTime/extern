import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import EditFolderBar from './EditFolderBar';
import { Up, Down } from './atomic-components/CssTriangle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Styles from '../style/Styles';
import { FolderId } from '../types/FolderId';
import PopoutMenu, { useWithPopoutMenu } from './molecular-components/PopoutMenu';

type FolderListItemProps = {
    folder: FolderId
    isSelected: boolean
    isEditable: boolean
    reordering: boolean
    setSelectedFolder: (_:any) => void
    setEditableTo: (isEditable: boolean) => void
    renameFolder: (oldName: string, newName: string) => boolean
    onDelete: (id: number) => void,
}

// eventually this should be split into multiple components.
const FolderListItem = ({
    folder,
    isSelected,
    isEditable,
    reordering,
    setSelectedFolder,
    setEditableTo,
    renameFolder,
    onDelete,
}: FolderListItemProps) => {
    
    const {
        editing,
        showError,
        isHovered,
        sharePopoutMenu,
        editPopoutMenu,
        startEdit,
        acceptEditing,
        cancelEditing,
        setHoveredTo,
        tradeUp,
        tradeDown

    } = useFolderListItem({
        folder,
        setEditableTo,
        renameFolder,
    });

    const classes = useStyles();
    if (editing) {
        return (
            <>
                {showError && <div className={classes.folderError}>
                    That folder name already exists
                </div>}
                <div className={classes.editRow}>
                    <EditFolderBar 
                        initial={folder.name}
                        onAccept={acceptEditing}
                        onCancel={cancelEditing}
                    />
                </div>
            </>
        );
    } else if (reordering) {
        return (
            <div 
                className={isSelected ? classes.selected : classes.unselected}
                onClick={() => setSelectedFolder(folder)}
                onMouseEnter={() => setHoveredTo(true)}
                onMouseLeave={() => setHoveredTo(false)}
            >
                <div className={classes.folderName}>{folder.name}</div>
                <div>
                    <Up 
                        className={classes.arrowTop} 
                        onClick={tradeUp}
                    />
                    <Down 
                        className={classes.arrowBottom} 
                        onClick={tradeDown}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div 
                    className={isSelected ? classes.selected : classes.unselected}
                    onClick={() => setSelectedFolder(folder)}
                    onMouseEnter={() => setHoveredTo(true)}
                    onMouseLeave={() => setHoveredTo(false)}
                >
                    <div className={classes.folderName}>{folder.name}</div>
                    {(isHovered && isEditable && folder.editable) && (
                        <div className={classes.edit} onClick={editPopoutMenu.open}>
                            <FontAwesomeIcon icon={faEllipsisH} />
                        </div>
                    )}
                    {editPopoutMenu.isOpen && (
                        <PopoutMenu 
                            menuEvent={editPopoutMenu.menuEvent}
                            horizontalFix={372}
                        >
                            <div 
                                className={classes.popoutMenuItem}
                                onClick={startEdit}
                            >Edit</div>
                            <div 
                                onClick={sharePopoutMenu.open}
                                className={classes.popoutMenuItem}
                            >
                                Share
                            </div>
                            <div>
                                {sharePopoutMenu.isOpen && (
                                    <PopoutMenu 
                                        menuEvent={sharePopoutMenu.menuEvent}
                                        horizontalFix={487}
                                    >
                                        <div>
                                            {'temp'}
                                        </div>
                                    </PopoutMenu>
                                )}
                            </div>
                            <hr className={classes.horizontalRule}/>
                            <div 
                                className={classes.popoutMenuItemDelete}
                                onClick={() => {
                                    onDelete(folder.id);
                                    editPopoutMenu.close();
                                    setHoveredTo(false);
                                }}
                            >Delete</div>
                        </PopoutMenu>
                    )}
                    
                </div>
            </>
        );
    }
}

const folderItemBase = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 21,
    width: 'calc(100% - 64px)',
    paddingLeft: Styles.size.large,
    paddingRight: Styles.size.large,
    color: '#4D4D4D',
    maxWidth: 300,
    '&:hover': {
        cursor: 'pointer'
    }
}

const useStyles = createUseStyles({
    selected: {
        ...folderItemBase,
        backgroundColor: '#E9E9E9'
    },
    unselected: {
        ...folderItemBase,
    },
    edit: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        height: 21,
        width: 21,
        '&:hover': {
            backgroundColor: 'gray'
        }
    },
    folderName: {
        textOverflow: 'ellipsis',
        maxWidth: 300,
        overflow: 'hidden',
        userSelect: 'none',
        whiteSpace: 'nowrap'
    },
    arrowTop: {
        marginTop: 3
    },
    arrowBottom: {
        marginTop: 5
    },
    folderError: {
        marginLeft: 32,
        color: Styles.color.red,
        fontSize: 12
    },
    deleteIcon: {
        marginLeft: 5,
        color: Styles.color.red,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    popoutMenu: {

    },
    popoutMenuItem: {
        margin: {
            left: 10, right: 30
        }
    },
    popoutMenuItemDelete: {
        color: Styles.color.red,
        margin: {
            left: 10, right: 30
        }
    },
    horizontalRule: {
        borderTop: '1px solid black',
        borderBottom: 0,
        borderLeft: 0
    },
    editRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: Styles.size.large
    }
});


type UseFolderListItemArgs = {
    folder: FolderId, 
    setEditableTo: (isEditable: boolean) => void,
    renameFolder: (folderName: string, newFolderName: string) => boolean
}


export const useFolderListItem = ({
    folder,
    setEditableTo,
    renameFolder
}: UseFolderListItemArgs) => {
    const [editing, setEditingTo] = useState(false);
    const [isHovered, setHoveredTo] = useState(false);
    const [showError, setShowErrorTo] = useState(false);
    const editPopoutMenu = useWithPopoutMenu();
    const sharePopoutMenu = useWithPopoutMenu(); 

    const startEdit = () => {
        setEditingTo(true);
        setEditableTo(false);
        setShowErrorTo(false);
    }
    
    const cancelEditing = () => {
        setEditingTo(false);
        setEditableTo(true);
    }

    const acceptEditing = (newFolderName: string) => {
        if (folder.name === newFolderName) {
            cancelEditing();
        } else if (renameFolder(folder.name, newFolderName)) {
            setEditingTo(false)
            setEditableTo(true);
        } else {
            setShowErrorTo(true);
        }
    }
    
    const tradeUp = () => {
        console.log("Trade Up");
    }
    const tradeDown = () => {
        console.log("Trade Down");
    }
    
    return {
        editPopoutMenu,
        sharePopoutMenu,
        editing,
        isHovered,
        showError,
        acceptEditing, 
        cancelEditing,
        tradeUp,
        tradeDown,
        startEdit,
        setHoveredTo
    }
}

export default FolderListItem;