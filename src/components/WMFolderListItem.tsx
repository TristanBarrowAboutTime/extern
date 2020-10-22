import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import WMEditFolderBar from './WMEditFolderBar';
import { Up, Down } from './atomic-components/WMCssTryangle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import WMStyles from '../style/WMStyles';
import { FolderId } from '../types/FolderId';
import WMPopoutMenu, { usePopoutMenu } from './molecular-components/WMPopoutMenu';

type WMFolderListItemProps = {
    folder: FolderId
    isSelected: boolean
    isEditable: boolean
    reordering: boolean
    setSelectedFolder: (_:any) => void
    setEditableTo: (isEditable: boolean) => void
    renameFolder: (oldName: string, newName: string) => boolean
    onDelete: (id: number) => void,
    initialHover?: boolean
}

const WMFolderListItem = ({
    folder,
    isSelected,
    isEditable,
    reordering,
    setSelectedFolder,
    setEditableTo,
    renameFolder,
    onDelete,
    initialHover = false
}: WMFolderListItemProps) => {
    const classes = useStyles();
    const [editing, setEditingTo] = useState(false);
    const [isHovered, setHoveredTo] = useState(initialHover);
    const [showError, setShowErrorTo] = useState(false);
    const { menuEvent, open, close } = usePopoutMenu();

    const startEdit = () => {
        setEditingTo(true);
        setEditableTo(false);
        setShowErrorTo(false);
    }
    const cancelEditing = () => {
        setEditingTo(false);
        setEditableTo(true);
    }

    const acceptEditing = (value: string) => {
        if (folder.name === value) {
            cancelEditing();
        } else if (renameFolder(folder.name, value)) {
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

    if (editing) {
        return (
            <>
                {showError && <div className={classes.folderError}>
                    That folder name already exists
                </div>}
                <div className={classes.editRow}>
                    <WMEditFolderBar 
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
                    <div className={classes.edit} onClick={open}>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                )}
                <WMPopoutMenu 
                    menuEvent={menuEvent}
                    padding={10}
                    tickPosition={10}
                    vPosition={-20}
                    hPosition={8}
                    horizontalFix={372}
                >
                    <div 
                        className={classes.popoutMenuItem}
                        onClick={startEdit}
                    >Edit</div>
                    <div 
                        className={classes.popoutMenuItem}
                    >Share</div>
                    <hr className={classes.horizontalRule}/>
                    <div 
                        className={classes.popoutMenuItemDelete}
                        onClick={() => {
                            onDelete(folder.id);
                            close();
                            setHoveredTo(false);
                        }}
                    >Delete</div>
                </WMPopoutMenu>
                
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
    paddingLeft: WMStyles.size.large,
    paddingRight: WMStyles.size.large,
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
        color: WMStyles.color.red,
        fontSize: 12
    },
    deleteIcon: {
        marginLeft: 5,
        color: WMStyles.color.red,
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
        color: WMStyles.color.red,
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
        marginRight: WMStyles.size.large
    }
});

export default WMFolderListItem;