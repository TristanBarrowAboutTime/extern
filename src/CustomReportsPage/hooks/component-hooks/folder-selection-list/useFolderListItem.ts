import { useCallback, useState } from 'react';

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

    const startEditing = useCallback(() => {
        setEditingTo(true);
        setEditableTo(false);
        setShowErrorTo(false);
    }, [setEditingTo, setEditableTo, setShowErrorTo]);
    
    const cancelEditing = useCallback(() => {
        setEditingTo(false);
        setEditableTo(true);
    }, [setEditingTo, setEditableTo]);

    const acceptEditing = useCallback((newFolderName: string): void => {
        if (folderName === newFolderName) {
            cancelEditing();
        } else if (nameIsUniq(newFolderName)) {
            setEditingTo(false);
            setEditableTo(true);
            renameFolder(newFolderName);
        } else {
            setShowErrorTo(true);
        }
    }, [
        folderName, 
        cancelEditing,
        nameIsUniq,
        setEditingTo, 
        setEditableTo, 
        renameFolder, 
        setShowErrorTo
    ]);

    return {
        editing,
        showError,
        acceptEditing, 
        cancelEditing,
        startEditing,
    }
}
