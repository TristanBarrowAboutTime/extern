import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import WMStyles from '../../style/WMStyles';


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
                return WMStyles.color.gray.medium;
            case ButtonType.BARE:
            case ButtonType.SMALL_BARE:
                return WMStyles.color.transparent;
            default:
                return WMStyles.color.gray.medium;
        }
    } else {
        switch(props.buttonType) {
            case ButtonType.NORMAL: 
            case ButtonType.SMALL_NORMAL:
                return WMStyles.color.gray.xx_dark;
            case ButtonType.GREEN:  
            case ButtonType.SMALL_GREEN:
                return WMStyles.color.green;
            case ButtonType.RED:
            case ButtonType.SMALL_RED:
                return WMStyles.color.red;
            case ButtonType.BARE:
            case ButtonType.SMALL_BARE:
                return WMStyles.color.transparent;
            default: 
                return WMStyles.color.gray.xx_dark;
        }
    }
}

const getPadding = (type: ButtonType) => {
    switch(type) {
        case ButtonType.SMALL_NORMAL: 
        case ButtonType.SMALL_GREEN:
        case ButtonType.SMALL_RED:
        case ButtonType.SMALL_BARE:
            return WMStyles.button.paddingSmall;
        case ButtonType.NORMAL: 
        case ButtonType.GREEN:  
        case ButtonType.RED:
        case ButtonType.BARE:
            return WMStyles.button.paddingNormal;
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
                return WMStyles.color.white;
            case ButtonType.BARE:
            case ButtonType.SMALL_BARE:
                return WMStyles.color.gray.dark;
            default: 
                return WMStyles.color.white;
        }
    } else {
        switch(props.buttonType) {
            case ButtonType.NORMAL: 
            case ButtonType.SMALL_NORMAL:
            case ButtonType.GREEN: 
            case ButtonType.SMALL_GREEN:
            case ButtonType.RED:
            case ButtonType.SMALL_RED:
                return WMStyles.color.white;
            case ButtonType.BARE:
            case ButtonType.SMALL_BARE:
                return WMStyles.color.gray.xx_dark;
            default: 
                return WMStyles.color.gray.xx_dark;
        }
    }
}

const getShadow = (props: StyledButtonProps): string => {
    if (props.disabled || props.buttonType === ButtonType.BARE) return "0";
    else return WMStyles.button.shadow;

}

const Button = styled.button`
    border: 0;
    border-radius: 4px;
    background-color: ${(props: StyledButtonProps) => getBgColor(props)};
    color: ${(props: StyledButtonProps) => getTextColor(props)};
    box-shadow: ${(props: StyledButtonProps) => getShadow(props)};
    padding: ${(props: StyledButtonProps) => getPadding(props.buttonType)};
    :hover {
        cursor: ${(props: StyledButtonProps) => props.disabled ? 'default' : 'pointer'}
    }
`;

type WMButtonProps = {
    buttonType?: ButtonType,
    text: string,
    styles?: object,
    onClick: () => void,
    disabled?: boolean,
}

export const WMButton: FunctionComponent<WMButtonProps> = ({
    buttonType = ButtonType.NORMAL, 
    text,
    onClick,
    styles = {},
    disabled = false
}: WMButtonProps) => {

    return (
        <Button 
            style={styles}
            onClick={onClick}
            disabled={disabled}
            buttonType={buttonType}
        >
            {text}
        </Button>
    );
}


export default WMButton;