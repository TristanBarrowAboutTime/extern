import { useState } from 'react';
import { usePopoutMenu } from '../../hooks/component-hooks/useWMPopoutMenu';
import { FolderId } from '../../types/FolderId';

type UseWMFolderListItemArgs = {
    folder: FolderId, 
    setEditableTo: (isEditable: boolean) => void,
    renameFolder: (folderName: string, newFolderName: string) => boolean
}


export const useWMFolderListItem = ({
    folder,
    setEditableTo,
    renameFolder
}: UseWMFolderListItemArgs) => {
    const [editing, setEditingTo] = useState(false);
    const [isHovered, setHoveredTo] = useState(false);
    const [showError, setShowErrorTo] = useState(false);
    const editPopoutMenu = usePopoutMenu();
    const sharePopoutMenu = usePopoutMenu(); 

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