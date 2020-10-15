import React, { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss';

/**
 * This will probably need to be turned into react-native at some point.
 */

export enum ButtonType {
    NORMAL = 'NORMAL',
    SMALL_GREEN = 'SMALL_GREEN',
    GREEN = 'GREEN',
    RED = 'RED',
    NAKED = 'NAKED',
}

export const WMButton: FunctionComponent<WMButtonProps> = ({
    buttonType = ButtonType.NORMAL, 
    text,
    onClick,
    disabled = false
}: WMButtonProps) => {
    const classes = useStyles();
    let buttonClass: string;
    // this switch case is not the best. 
    // it should be changed when switching over to React Native
    switch (buttonType) {
        case ButtonType.SMALL_GREEN:
            buttonClass = classes.smallGreenButton;
            break;
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
        if (buttonType === ButtonType.SMALL_GREEN) buttonClass = classes.smallDisabledButton;
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

type WMButtonProps = {
    buttonType?: ButtonType,
    text: string,
    onClick: () => void,
    disabled?: boolean,
}

const cursorPtr = {
    '&:hover': {
        cursor: 'pointer'
    }
}

const floating = {
    boxShadow: {
        x: 0, y: 2, blur: 3, color: '#bbb'
    }
}

const btnBase = {
    border: 0,
    '&:focus': {
        outline: 'none'
    },
    borderRadius: 4
}

const smallBtn = {
    padding: {
        top: 5, bottom: 4, left: 12, right: 12,
    },
}
const normalBtn = {
    padding: {
        top: 9, bottom: 8, left: 11, right: 12,
    },
}

const useStyles = createUseStyles({
    smallGreenButton: {
        ...btnBase,
        ...smallBtn,
        ...cursorPtr,
        ...floating,
        backgroundColor: '#85B554',
        color: 'white',
    },
    greenButton: {
        ...btnBase,
        ...normalBtn,
        ...cursorPtr,
        ...floating,
        backgroundColor: '#85B554',
        color: 'white',
    },
    redButton: {
        ...btnBase,
        ...normalBtn,
        ...cursorPtr,
        ...floating,
        backgroundColor: '#9B3E38',
        color: 'white',
    },
    normalButton: {
        ...btnBase,
        ...normalBtn,
        ...cursorPtr,
        ...floating,
        backgroundColor: '#333333',
        color: 'white',
    },
    nakedButton: {
        ...btnBase,
        ...normalBtn,
        ...cursorPtr,
        backgroundColor: 'transparent',
        color: 'black',
    },
    smallDisabledButton: {
        ...btnBase,
        ...smallBtn,
        backgroundColor: '#E9E9E9',
        color: '#999999',
    },
    disabledButton: {
        ...btnBase,
        ...normalBtn,
        backgroundColor: '#E9E9E9',
        color: '#999999',
    },
    nakedDisabledButton: {
        ...btnBase,
        ...normalBtn,
        backgroundColor: 'transparent',
        color: '#4D4D4D',
    }
});

export default WMButton;