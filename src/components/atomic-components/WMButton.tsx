import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import WMStyles from '../../style/WMStyles';


/**
 * This will probably need to be turned into react-native at some point.
 */
export enum ButtonType {
    NORMAL = 'NORMAL',
    SMALL_GREEN = 'SMALL_GREEN',
    GREEN = 'GREEN',
    RED = 'RED',
    NAKED = 'NAKED',
    BARE = 'BARE'
}

type StyledButtonProps = {
    buttonType: ButtonType
    disabled: boolean
}

const getBgColor = (props: StyledButtonProps): string => {
    if (props.disabled) {
        switch(props.buttonType) {
            case ButtonType.NORMAL: 
            case ButtonType.SMALL_GREEN:
            case ButtonType.GREEN:  
            case ButtonType.RED:
                return WMStyles.color.gray.medium;
            case ButtonType.BARE:
            case ButtonType.NAKED:
                return 'rgba(0,0,0,0)';
        }
    } else {
        switch(props.buttonType) {
            case ButtonType.NORMAL: 
                return WMStyles.color.gray.xx_dark;
            case ButtonType.SMALL_GREEN:
            case ButtonType.GREEN:  
                return WMStyles.color.green;
            case ButtonType.RED:
                return WMStyles.color.red;
            case ButtonType.BARE:
            case ButtonType.NAKED:
                return 'rgba(0,0,0,0)';
            default: 
                return WMStyles.color.gray.xx_dark;
        }
    }
}

const getTextColor = (props: StyledButtonProps): string => {
    if (props.disabled) {
        switch(props.buttonType) {
            case ButtonType.NORMAL:
            case ButtonType.SMALL_GREEN:
            case ButtonType.GREEN:
            case ButtonType.RED:
                return WMStyles.color.white;
            case ButtonType.BARE:
            case ButtonType.NAKED:
                return WMStyles.color.gray.dark;
        }
    } else {
        switch(props.buttonType) {
            case ButtonType.NORMAL: 
            case ButtonType.SMALL_GREEN:
            case ButtonType.GREEN:  
            case ButtonType.RED:
                return WMStyles.color.white;
            case ButtonType.BARE:
            case ButtonType.NAKED:
                return WMStyles.color.gray.xx_dark;
            default: 
                return WMStyles.color.gray.xx_dark;
        }
    }
}

const getShadow = (props: StyledButtonProps): string => {
    if (props.disabled) return '0';
    if (props.buttonType === ButtonType.NAKED || 
        props.buttonType === ButtonType.BARE) return "0";
    else return `0 2px 4px #cccccc`;

}

const Button = styled.button`
    border: 0;
    border-radius: 4px;
    background-color: ${(props: StyledButtonProps) => getBgColor(props)};
    color: ${(props: StyledButtonProps) => getTextColor(props)};
    box-shadow: ${(props: StyledButtonProps) => getShadow(props)};
    padding: 10px;
    :hover {
        cursor: ${(props: StyledButtonProps) => props.disabled ? 'default' : 'pointer'}
    }
`;

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

type WMButtonProps = {
    buttonType?: ButtonType,
    text: string,
    styles?: object,
    onClick: () => void,
    disabled?: boolean,
}

export default WMButton;