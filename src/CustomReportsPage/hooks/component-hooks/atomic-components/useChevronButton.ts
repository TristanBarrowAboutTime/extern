import { useState, useCallback, useRef, MutableRefObject} from 'react';
import { useButton } from './useButton';
import { ButtonType } from '../../../types/ButtonType';

type UseChevronButtonArgs = {
    buttonType: ButtonType
    disabled: boolean
}

export const useChevronButton = ({
    buttonType,
    disabled,
}: UseChevronButtonArgs) => {
    const buttonBinding = useButton({buttonType, disabled, onClick: () => {}});
    const [isOpen, setIsOpenTo] = useState(false);
    const btnRef = useRef() as MutableRefObject<HTMLDivElement>;

    // console.log('body', isOpen);

    const click = useCallback(() => {
        setIsOpenTo(!isOpen);
    }, [isOpen]);

    const close = (e: MouseEvent | undefined) => {
        if (e !== undefined) e.stopPropagation();
        setIsOpenTo(false);
    }

    return {
        ...buttonBinding,
        click,
        isOpen,
        close,
    }
}