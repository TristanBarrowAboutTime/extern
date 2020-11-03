import React, { useState } from 'react';
import EditFolderRow from './EditFolderRow';
import NormalFolderRow from './NormalFolderRow';
import ReorderFolderRow from './ReorderFolderRow';

type FolderListItemProps = {
    folder: {name: string, editable: boolean}
    isSelected: boolean
    isEditable: boolean
    reordering: boolean
    nameIsUniq: (name: string) => boolean
    tradeUp: () => void
    tradeDown: () => void
    setSelectedFolder: (_:any) => void
    setEditableTo: (isEditable: boolean) => void
    renameFolder: (name: string) => boolean
    onDelete: () => void,
}

// eventually this should be split into multiple components.
const FolderListItem = ({
    folder,
    isSelected,
    isEditable,
    reordering,
    nameIsUniq,
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
        nameIsUniq,
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
    renameFolder: (name: string) => void
    nameIsUniq: (name: string) => boolean
}


export const useFolderListItem = ({
    folder,
    setEditableTo,
    renameFolder,
    nameIsUniq,
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

    const acceptEditing = (newFolderName: string): void => {
        if (folder.name === newFolderName) {
            cancelEditing();
        } else if (nameIsUniq(newFolderName)) {
            console.warn("When changing this to work with the backend, remove the React State update warning by updating everything at once.");
            setEditingTo(false);
            setEditableTo(true);
            renameFolder(newFolderName);
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