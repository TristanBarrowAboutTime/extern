import React, { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss';

/**
 * For now making sure that diabled state matches with the disabled styles is 
 * left to the parent. It is probably best to change that in the future.
 */


export enum ButtonType {
    NORMAL = 'NORMAL',
    GREEN = 'GREEN',
    RED = 'RED',
    NAKED = 'NAKED',
}

type WMButtonProps = {
    buttonType?: ButtonType,
    text: string,
    onClick: () => void,
    disabled?: boolean,
}

const btnBase = {
    padding: {
        top: 9, bottom: 8, left: 11, right: 12,
    },
    border: 0,
    '&:focus': {
        outline: 'none'
    }
}

const useStyles = createUseStyles({
    greenButton: {
        ...btnBase,
        backgroundColor: '#85B554',
        color: 'white',
    },
    redButton: {
        ...btnBase,
        backgroundColor: '#9B3E38',
        color: 'white',
    },
    normalButton: {
        ...btnBase,
        backgroundColor: '#333333',
        color: 'white',
    },
    nakedButton: {
        ...btnBase,
        backgroundColor: 'transparent',
        color: 'black',
    },
    disabledButton: {
        ...btnBase,
        backgroundColor: '#E9E9E9',
        color: '#999999',
    },
    nakedDisabledButton: {
        ...btnBase,
        backgroundColor: 'transparent',
        color: '#999999',
    }

});

export const WMButton: FunctionComponent<WMButtonProps> = ({
    buttonType = ButtonType.NORMAL, 
    text,
    onClick,
    disabled = false
}: WMButtonProps) => {
    const classes = useStyles();
    let buttonClass: string;
    
    switch (buttonType) {
        case ButtonType.GREEN:
            buttonClass = classes.greenButton;
            break;
        case ButtonType.RED: 
            buttonClass = classes.redButton;
            break;
        case ButtonType.NORMAL: 
            buttonClass = classes.normalButton;
            break;
        case ButtonType.NAKED: 
            buttonClass = classes.nakedButton;
            break;
        default:
            buttonClass = classes.normalButton;
    }
    if (disabled) {
        buttonClass = classes.disabledButton;
        if (buttonType === ButtonType.NAKED) buttonClass = classes.nakedDisabledButton;
    }

    return (
        <button 
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default WMButton;