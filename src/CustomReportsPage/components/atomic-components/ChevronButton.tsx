import * as React from 'react';
import styled from 'styled-components';
import { ButtonType } from '../../types/ButtonType';
import { useChevronButton } from '../../hooks/component-hooks/atomic-components/useChevronButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

type StyledButtonProps = {
    backgroundColor: string
    shadow: string
    padding: string
    cursor: string
    color: string
}

const StyledButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
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

const IconContainer = styled.div`
    position: relative;
    top: 2px;
`;

const ButtonText = styled.span`
    padding-right: 6px;
`;

const DropdownRelative = styled.div`
    position: relative;
    z-index: 10;
`;

const DropdownAbsolute = styled.div`
    position: absolute;
    padding: 10px;
    background-color: white;
    border: 1px solid black; 
    border-radius: 4px;
`;

type ChevronButtonProps = {
    children: React.ReactChildren | React.ReactChild 
    buttonType?: ButtonType,
    text: string,
    styles?: object,
    disabled?: boolean,
}

const ChevronButton = ({
    children,
    buttonType = ButtonType.NORMAL,
    text,
    styles = {},
    disabled = false
}: ChevronButtonProps) => {
    const binding = useChevronButton({buttonType, disabled});

    return (
        <div>
            <StyledButton
                style={styles}
                onClick={binding.click}
                backgroundColor={binding.style.backgroundColor}
                padding={binding.style.padding}
                color={binding.style.color}
                shadow={binding.style.shadow}
                cursor={binding.style.cursor}
            >
                <ButtonText>{text}</ButtonText>
                <IconContainer>
                    {binding.isOpen ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                    )}
                </IconContainer>
            </StyledButton>
            {binding.isOpen && (
                <DropdownRelative>
                    <DropdownAbsolute>
                        {children}
                    </DropdownAbsolute>
                </DropdownRelative>
            )}
        </div>
    );
}

export default ChevronButton;