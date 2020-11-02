import React, { useState } from 'react';
import EditFolderRow from './EditFolderRow';
import NormalFolderRow from './NormalFolderRow';
import ReorderFolderRow from './ReorderFolderRow';

type FolderListItemProps = {
    folder: {name: string, editable: boolean}
    isSelected: boolean
    isEditable: boolean
    reordering: boolean
    tradeUp: () => void
    tradeDown: () => void
    setSelectedFolder: (_:any) => void
    setEditableTo: (isEditable: boolean) => void
    renameFolder: (oldName: string, newName: string) => boolean
    onDelete: () => void,
}

// eventually this should be split into multiple components.
const FolderListItem = ({
    folder,
    isSelected,
    isEditable,
    reordering,
    tradeUp,
    tradeDown,
    setSelectedFolder,
    setEditableTo,
    renameFolder,
    onDelete,
}: FolderListItemProps) => {
    
    const {
        editing,
        showError,
        startEditing,
        acceptEditing,
        cancelEditing,

    } = useFolderListItem({
        folder,
        setEditableTo,
        renameFolder,
    });
    if (editing) {
        return (
            <EditFolderRow
                initial={folder.name}
                showError={showError}
                errorText={'That folder name already exists'}
                onAccept={acceptEditing}
                onCancel={cancelEditing}
            />
        );
    } else if (reordering) {
        return (
            <ReorderFolderRow 
                folderName={folder.name}
                isReorderable={folder.editable}
                tradeUp={tradeUp}
                tradeDown={tradeDown}
            />
        );
    } else {
        return (
            <NormalFolderRow
                folderName={folder.name}
                isSelected={isSelected}
                isEditable={isEditable}
                selectedFolder={() => setSelectedFolder(folder)}
                onEdit={startEditing}
                onDelete={() => onDelete()}
            />
        );
    }
}

type UseFolderListItemArgs = {
    folder: {name: string, editable: boolean}, 
    setEditableTo: (isEditable: boolean) => void,
    renameFolder: (folderName: string, newFolderName: string) => boolean
}

export const useFolderListItem = ({
    folder,
    setEditableTo,
    renameFolder
}: UseFolderListItemArgs) => {
    const [editing, setEditingTo] = useState(false);
    const [showError, setShowErrorTo] = useState(false);

    const startEditing = () => {
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

    return {
        editing,
        showError,
        acceptEditing, 
        cancelEditing,
        startEditing,
    }
}

export default FolderListItem;