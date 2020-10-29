import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Styles from '../../style/Styles';

/**
 * This will probably need to be turned into react-native at some point.
 */
export enum ButtonType {
    SMALL_NORMAL = 'SMALL_NORMAL',
    SMALL_GREEN = 'SMALL_GREEN',
    SMALL_BARE = 'SMALL_BARE',
    SMALL_RED = 'SMALL_RED',
    NORMAL = 'NORMAL',
    GREEN = 'GREEN',
    BARE = 'BARE',
    RED = 'RED',
}

type StyledButtonProps = {
    buttonType: ButtonType
    disabled: boolean
}

const getBgColor = (props: StyledButtonProps): string => {
    if (props.disabled) {
        switch(props.buttonType) {
            case ButtonType.NORMAL: 
            case ButtonType.SMALL_NORMAL:
            case ButtonType.GREEN:  
            case ButtonType.SMALL_GREEN:
            case ButtonType.RED:
            case ButtonType.SMALL_RED:
                return Styles.color.gray.medium;
            case ButtonType.BARE:
            case ButtonType.SMALL_BARE:
                return Styles.color.transparent;
            default:
                return Styles.color.gray.medium;
        }
    } else {
        switch(props.buttonType) {
            case ButtonType.NORMAL: 
            case ButtonType.SMALL_NORMAL:
                return Styles.color.gray.xx_dark;
            case ButtonType.GREEN:  
            case ButtonType.SMALL_GREEN:
                return Styles.color.green;
            case ButtonType.RED:
            case ButtonType.SMALL_RED:
                return Styles.color.red;
            case ButtonType.BARE:
            case ButtonType.SMALL_BARE:
                return Styles.color.transparent;
            default: 
                return Styles.color.gray.xx_dark;
        }
    }
}

const getPadding = (type: ButtonType) => {
    switch(type) {
        case ButtonType.SMALL_NORMAL: 
        case ButtonType.SMALL_GREEN:
        case ButtonType.SMALL_RED:
        case ButtonType.SMALL_BARE:
            return Styles.button.paddingSmall;
        case ButtonType.NORMAL: 
        case ButtonType.GREEN:  
        case ButtonType.RED:
        case ButtonType.BARE:
            return Styles.button.paddingNormal;
        default:
            return '10px'; 
    } 
    
}

const getTextColor = (props: StyledButtonProps): string => {
    if (props.disabled) {
        switch(props.buttonType) {
            case ButtonType.NORMAL:
            case ButtonType.SMALL_NORMAL:
            case ButtonType.GREEN:
            case ButtonType.SMALL_GREEN:
            case ButtonType.RED:
            case ButtonType.SMALL_RED:
                return Styles.color.white;
            case ButtonType.BARE:
            case ButtonType.SMALL_BARE:
                return Styles.color.gray.dark;
            default: 
                return Styles.color.white;
        }
    } else {
        switch(props.buttonType) {
            case ButtonType.NORMAL: 
            case ButtonType.SMALL_NORMAL:
            case ButtonType.GREEN: 
            case ButtonType.SMALL_GREEN:
            case ButtonType.RED:
            case ButtonType.SMALL_RED:
                return Styles.color.white;
            case ButtonType.BARE:
            case ButtonType.SMALL_BARE:
                return Styles.color.gray.xx_dark;
            default: 
                return Styles.color.gray.xx_dark;
        }
    }
}

const getShadow = (props: StyledButtonProps): string => {
    if (props.buttonType === ButtonType.BARE || 
        props.buttonType === ButtonType.SMALL_BARE || 
        props.disabled) 
    { 
        return '0'; 
    }
    else return Styles.button.shadow;

}

// eventually this implementation should be changed to something more sustainable
const Container = styled.button`
    border: 0;
    border-radius: 4px;
    background-color: ${(props: StyledButtonProps) => getBgColor(props)};
    color: ${(props: StyledButtonProps) => getTextColor(props)};
    box-shadow: ${(props: StyledButtonProps) => getShadow(props)};
    padding: ${(props: StyledButtonProps) => getPadding(props.buttonType)};
    :hover {
        cursor: ${(props: StyledButtonProps) => props.disabled ? 'default' : 'pointer'}
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

    return (
        <Container 
            style={styles}
            onClick={onClick}
            disabled={disabled}
            buttonType={buttonType}
        >
            {text}
        </Container>
    );
}


export default Button;