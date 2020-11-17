import { useState } from 'react';

type UseFolderListItemArgs = {
    folderName: string, 
    setEditableTo: (isEditable: boolean) => void,
    renameFolder: (name: string) => void
    nameIsUniq: (name: string) => boolean
}


export const useFolderListItem = ({
    folderName,
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
        if (folderName === newFolderName) {
            cancelEditing();
        } else if (nameIsUniq(newFolderName)) {
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
