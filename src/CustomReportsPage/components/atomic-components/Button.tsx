import * as React from 'react';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ButtonType } from '../../types/ButtonType';
import { useButton } from '../../hooks/component-hooks/atomic-components/useButton';

type StyledButtonProps = {
    backgroundColor: string
    shadow: string
    padding: string
    cursor: string
    color: string
}

const StyledButton = styled.div`
    border: 0;
    border-radius: 4px;
    white-space: nowrap;
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

const Button: FunctionComponent<ButtonProps> = ({
    buttonType = ButtonType.NORMAL, 
    text,
    onClick,
    styles = {},
    disabled = false
}: ButtonProps) => {
    const binding = useButton({buttonType, disabled, onClick});

    return (
        <StyledButton
            style={styles}
            onClick={binding.click}
            backgroundColor={binding.style.backgroundColor}
            padding={binding.style.padding}
            color={binding.style.color}
            shadow={binding.style.shadow}
            cursor={binding.style.cursor}
        >
            {text}
        </StyledButton>
    );
}

export default Button;