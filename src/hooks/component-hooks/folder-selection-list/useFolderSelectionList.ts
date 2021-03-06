import { useState, useCallback, useRef, MutableRefObject } from 'react';
import { objectifyArray } from '../../../utils/objectifyFoldersArray';
import { useWithSearchBar } from '../atomic-components/useSearchBar';
import { Folders } from '../../../types/Folders';

type UseWithFolderSelectionListArgs = {
    folders: {
        id: number,
        name: string, 
        editable: boolean
    }[],
    order: string[]
}

export type FolderSelectionListProps = {
    folders: Folders
    order: string[]
    selectedFolder: string
    selectFolder: (folder: string) => void
    swapUp: (id: string) => void
    swapDown: (id: string) => void
    nameIsUniq: (name: string) => boolean
    folderName: string
    isEditable: boolean
    isReordering: boolean
    acceptReordering: () => void
    cancelReordering: () => void
    setEditableTo: (isEditable: boolean) => void
    renameFolder: (id: string, newName: string) => boolean
    setReorderingTo: (isReordering: boolean) => void
    addNewFolder: (folderName: string) => boolean
    onDelete: (id: string) => void
    deleteFolder: () => void
}

export const useWithFolderSelectionList = (args: UseWithFolderSelectionListArgs): FolderSelectionListProps => {
    const [folders, setFolders] = useState(objectifyArray(args.folders));
    const [folderOrder, setFolderOrderTo] = useState(args.order);
    const [tempOrder, setTempOrderTo] = useState(args.order);
    const [isReordering, setReorderingTo] = useState(false);
    const [selectedFolder, selectFolder] = useState(folderOrder[0]);
    const [isEditable, setEditableTo] = useState(true);
    const [folderToDelete, setFolderToDeleteTo] = useState<string|null>(null);
    const [newIdCounter, setNewIdCounterTo] = useState(0);

    const swapDown = useCallback((id: string) => {
        const index = tempOrder.indexOf(id);
        if (index !== tempOrder.length - 1) {
        if (!folders[tempOrder[index+1]].editable) return;
            setTempOrderTo([
                ...tempOrder.slice(0,index),
                tempOrder[index+1],
                tempOrder[index],
                ...tempOrder.slice(index+2)
            ])
        }
    }, [folders, tempOrder, setTempOrderTo]);

    const swapUp = useCallback((id: string) => {
        const index = tempOrder.indexOf(id);
        if (!folders[tempOrder[index-1]].editable) return;
        if (index !== 0) {
            setTempOrderTo([
                ...tempOrder.slice(0,index-1),
                tempOrder[index],
                tempOrder[index-1],
                ...tempOrder.slice(index+1)
            ]);
        }
    }, [folders, tempOrder, setTempOrderTo]);

    const acceptReordering = useCallback(() => {
        setFolderOrderTo(tempOrder);
    }, [tempOrder, setFolderOrderTo]);

    const cancelReordering = useCallback(() => {
        setTempOrderTo(folderOrder);
    }, [folderOrder, setTempOrderTo]);

    const nameIsUnique = useCallback((name: string) => {
        let isUnique: boolean = true;
        Object.keys(folders).forEach((id) => {
            if (folders[id].name === name) {
                isUnique = false;
            }
        });
    
        return isUnique;
    }, [folders]);

    // This will need to be modified to work with the back end.
    const renameFolder = useCallback((id: string, name: string): boolean => {
        name = name.trim();
        setFolders({...folders, [id]: {name: name, editable: true}})
        return true;
    }, [folders]);

    const addNewFolder = useCallback((folderName: string): boolean => {
        if (nameIsUnique(folderName)) {
            setFolders({...folders, 
                [`newFolder-${newIdCounter}`]: {
                    name: folderName, 
                    editable: true 
                }
            });
            setNewIdCounterTo(newIdCounter+1);
            return true;
        } else {
            return false;
        }
    }, [folders, newIdCounter, nameIsUnique]);

    const onDelete = useCallback((id: string) => {
        setFolderToDeleteTo(id);
    }, []);

    const deleteFolder = useCallback(() => {
        if (folderToDelete !== null) {
            
            let i: number = -1;
            folderOrder.forEach((id, index) => {
                if (id === folderToDelete) {
                    i = index;   
                }
            });
            if (i === -1) {
                throw Error('Folder id does not exist in folder order');
            }
            setFolderOrderTo(folderOrder.slice(0,i).concat(folderOrder.slice(i+1)));
            setFolderToDeleteTo(null);
        
        }
    }, [folderOrder, folderToDelete]);

    return {
        folders,
        order: isReordering ? tempOrder : folderOrder,
        selectedFolder,
        folderName: folders[selectedFolder].name,
        isReordering,
        isEditable,
        deleteFolder,
        selectFolder,
        setReorderingTo,
        swapUp,
        swapDown,
        nameIsUniq: nameIsUnique,
        acceptReordering,
        cancelReordering,
        renameFolder,
        addNewFolder,
        setEditableTo,
        onDelete
    }
}


type UseFolderSelectionListArgs = {
    setEditableTo: (isEditable: boolean) => void
    setReorderingTo: (isReordering: boolean) => void
    acceptReordering: () => void
    cancelReordering: () => void
}


export const useFolderSelectionList = ({
    setEditableTo, 
    setReorderingTo,
    acceptReordering,
    cancelReordering,
}:UseFolderSelectionListArgs) => {
    const [isAddingNewFolder, setAddingNewFolderTo] = useState(false);
    const searchBar = useWithSearchBar();
    
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    const setToNormal = useCallback(() => {
        setReorderingTo(false);
        setAddingNewFolderTo(false);
        setEditableTo(true);
    }, [setReorderingTo, setAddingNewFolderTo, setEditableTo]);

    const acceptOrder = useCallback(() => {
        acceptReordering();
        setToNormal();
    }, [acceptReordering, setToNormal]);

    const rejectOrder = useCallback(() => {
        cancelReordering();
        setToNormal();
    }, [cancelReordering, setToNormal]);

    const setToReordering = useCallback(() => {
        setReorderingTo(true);
        setAddingNewFolderTo(false);
        setEditableTo(false);
    }, [setReorderingTo, setAddingNewFolderTo, setEditableTo]);

    const setToAddingNewFolder = useCallback(() => {
        setReorderingTo(false);
        setAddingNewFolderTo(true);
        setEditableTo(false);
        ref.current.scrollIntoView(); // { behavior: 'smooth'} fails to scroll. Workaround needed.
    }, [ref, setReorderingTo, setAddingNewFolderTo, setEditableTo]);;

    return {
        ref,
        isAddingNewFolder,
        bindSearchBar: searchBar.searchBinding,
        searchValue: searchBar.value,
        setToAddingNewFolder,
        setToNormal,
        setToReordering,
        acceptOrder,
        rejectOrder 
    }
}