import { useEffect } from 'react';
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

    const { value, bind } = useTextInput(initial);
    const accept = () => {
        onAccept(value)
    }
    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (e.keyCode === 13) {
                onAccept(value);
            }
        }
        document.addEventListener('keydown', listener);
        return () => {
            document.removeEventListener('keydown', listener);
        }
    }, [value]);

    return {
        accept,
        cancel: onCancel,
        bindInput: bind, 
    }

}
