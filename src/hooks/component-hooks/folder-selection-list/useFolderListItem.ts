import { useState } from 'react';

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
