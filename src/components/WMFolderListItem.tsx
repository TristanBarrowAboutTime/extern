import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import WMEditFolderBar from './WMEditFolderBar';
import { Up, Down } from './atomic-components/WMCssTryangle';

export type FolderId = { name: string, editable: boolean };

type WMFolderListItemProps = {
    folder: FolderId
    isSelected: boolean
    isEditable: boolean
    reordering: boolean
    setSelectedFolder: (_:any) => any
    setEditableTo: (isEditable: boolean) => void
    renameFolder: (oldName: string, newName: string) => void
    onDelete: (name: string) => void
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
}: WMFolderListItemProps) => {
    const classes = useStyles();
    const [editing, setEditingTo] = useState(false);
    const [isHovered, setHoveredTo] = useState(false);

    const edit = () => {
        setEditingTo(true);
        setEditableTo(false);
    }
    const cancelEditing = () => {
        setEditingTo(false);
        setEditableTo(true);
    }
    const acceptEditing = (value: string) => {
        setEditingTo(false);
        setEditableTo(true);
        renameFolder(folder.name, value);
    }
    const tradeUp = () => {
        
    }
    const tradeDown = () => {
        
    }

    if (editing) {
        return (
            <div className={classes.editRow}>
                <WMEditFolderBar 
                    initial={folder.name}
                    onAccept={acceptEditing}
                    onCancel={cancelEditing}
                />
                <div 
                    onClick={() => {}}
                    style={{backgroundColor: 'red', width: 12, height: 12, marginLeft: 5, borderRadius: 100}}></div>
            </div>
        );
    } else if (reordering) {
        return (
            <div 
                className={isSelected ? classes.selected : classes.unselected}
                onClick={() => setSelectedFolder(folder)}
                onMouseEnter={() => setHoveredTo(true)}
                onMouseLeave={() => setHoveredTo(false)}
            >
                {folder.name}
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
            <div 
                className={isSelected ? classes.selected : classes.unselected}
                onClick={() => setSelectedFolder(folder)}
                onMouseEnter={() => setHoveredTo(true)}
                onMouseLeave={() => setHoveredTo(false)}
            >
                <div className={classes.folderName}>{folder.name}</div>
                {(isHovered && isEditable && folder.editable) && 
                    <span className={classes.edit} onClick={edit}>Edit</span>}
            </div>
        );
    }
    
}

const folderItemBase = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 21,
    width: 'calc(100% - 64px)',
    paddingLeft: 32,
    paddingRight: 32,
    color: '#4D4D4D',
    textOverflow: 'ellipsis',
    maxWidth: 300,
    overflow: 'hidden',
    userSelect: 'none',
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
        borderRadius: 4,
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
    editRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 32
    }
});

export default WMFolderListItem;