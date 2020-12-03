import { useCallback } from 'react';
import { useTextInput } from '../../useTextInput';

type EditFolderRowArgs = {
    onAccept: (title: string) => void
    onCancel: () => void
    initial: string
}

export const useEditFolderRow = ({
    onAccept,
    onCancel,
    initial,
}: EditFolderRowArgs) => {

    const { value, bind:bindInput } = useTextInput(initial);
    
    const accept = useCallback(() => {
        onAccept(value)
    }, [value, onAccept]); 

    return {
        accept,
        cancel: onCancel,
        bindInput 
    }

}
