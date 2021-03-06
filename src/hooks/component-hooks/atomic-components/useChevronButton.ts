import { useState, useCallback } from 'react';
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


    const click = useCallback(() => {
        setIsOpenTo(!isOpen);
    }, [isOpen]);

    const close = useCallback((e: MouseEvent | undefined) => {
        if (e !== undefined) e.stopPropagation();
        setIsOpenTo(false);
    }, []);

    return {
        ...buttonBinding,
        click,
        isOpen,
        close,
    }
}