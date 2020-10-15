import { findByLabelText } from '@testing-library/react';
import React, { FunctionComponent, useState } from 'react';
import { useTextInput } from '../hooks/useTextInput';
import { createUseStyles } from 'react-jss';
import FolderSelectionList from './WMFolderSelectionList';
import WMEditFolderBar from './WMEditFolderBar';

export type FolderId = { name: string, editable: boolean };

type WMFolderListItemProps = {
    folder: FolderId,
    isSelected: boolean,
    isEditable: boolean,
    setSelectedFolder: (_:any) => any,
    setEditableTo: (isEditable: boolean) => void,
    renameFolder: (oldName: string, newName: string) => void
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
    }
});

const WMFolderListItem = ({
    folder,
    isSelected,
    isEditable,
    setSelectedFolder,
    setEditableTo,
    renameFolder
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

    if (editing) {
        return (
            <WMEditFolderBar 
                initial={folder.name}
                onAccept={acceptEditing}
                onCancel={cancelEditing}
            />
        );
    }
    return (
        <div 
            className={isSelected ? classes.selected : classes.unselected}
            onClick={() => setSelectedFolder(folder)}
            onMouseEnter={() => setHoveredTo(true)}
            onMouseLeave={() => setHoveredTo(false)}
        >
            {folder.name}
            {(isHovered && isEditable && folder.editable) && 
                <span className={classes.edit} onClick={edit}>Edit</span>}
        </div>
    );
    
}

export default WMFolderListItem;