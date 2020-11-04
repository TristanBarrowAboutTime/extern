import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Styles from '../../style/Styles';
import { ButtonType } from '../../types/ButtonType';
import { useButton } from '../../hooks/component-hooks/atomic-components/useButton';

/**
 * This will probably need to be turned into react-native at some point.
 */

type StyledButtonProps = {
    backgroundColor: string
    shadow: string
    padding: string
    cursor: string
    color: string
}

// eventually this implementation should be changed to something more sustainable
const StyledButton = styled.button`
    border: 0;
    border-radius: 4px;
    background-color: ${(props: StyledButtonProps) => props.backgroundColor};
    color: ${(props: StyledButtonProps) => props.color};
    box-shadow: ${(props: StyledButtonProps) => props.shadow};
    padding: ${(props: StyledButtonProps) => props.padding};
    :hover {
        cursor: ${(props: StyledButtonProps) => props.cursor}
    }
    :focus {
        border: 0;
    }
`;

type ButtonProps = {
    buttonType?: ButtonType,
    text: string,
    styles?: object,
    onClick: () => void,
    disabled?: boolean,
}

export const Button: FunctionComponent<ButtonProps> = ({
    buttonType = ButtonType.NORMAL, 
    text,
    onClick,
    styles = {},
    disabled = false
}: ButtonProps) => {
    const binding = useButton({buttonType, disabled});

    return (
        <StyledButton
            style={styles}
            onClick={onClick}
            disabled={disabled}
            backgroundColor={binding.backgroundColor}
            padding={binding.padding}
            color={binding.color}
            shadow={binding.shadow}
            cursor={binding.cursor}
        >
            {text}
        </StyledButton>
    );
}


export default Button;