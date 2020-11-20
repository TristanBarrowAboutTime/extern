import { useState } from 'react';
import { useButton } from './useButton';
import { ButtonType } from '../../../types/ButtonType';
import { useClickClosableRef } from '../../useClickCloseableRef';

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

    const click = () => {
        setIsOpenTo(!isOpen);
    }

    return {
        ...buttonBinding,
        click,
        isOpen,
        close: () => setIsOpenTo(false)
    }
}