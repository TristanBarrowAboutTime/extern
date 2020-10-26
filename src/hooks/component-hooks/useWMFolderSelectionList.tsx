import { useState, useRef, MutableRefObject, useCallback } from 'react';
import { useTextInput } from '../useTextInput';

export const useWMFolderSelectList = (setEditableTo: (isEditable: boolean) => void) => {
    const [isReordering, setReorderingTo] = useState(false);
    const [isAddingNewFolder, setAddingNewFolderTo] = useState(false);
    const { value, bind } = useTextInput('');
    
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    const setToNormal = useCallback(() => {
        setReorderingTo(false);
        setAddingNewFolderTo(false);
        setEditableTo(true);
    }, [setEditableTo]);

    const setToReordering = useCallback(() => {
        setReorderingTo(true);
        setAddingNewFolderTo(false);
        setEditableTo(false);
    }, [setEditableTo]);

    const setToAddingNewFolder = () => {
        setReorderingTo(false);
        setAddingNewFolderTo(true);
        setEditableTo(false);
        ref.current.scrollIntoView(); // { behavior: 'smooth'} fails to scroll. Workaround needed.
    };

    return {
        ref,
        isReordering,
        isAddingNewFolder,
        bindSearchBar: bind,
        searchValue: value,
        setToAddingNewFolder,
        setToNormal,
        setToReordering,
    }
}