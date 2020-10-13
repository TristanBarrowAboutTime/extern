import React, { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss';

type WMButtonProps = {
    buttonType?: string,
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
    buttonType = 'normal', 
    text,
    onClick,
    disabled = false
}: WMButtonProps) => {
    const classes = useStyles();
    let buttonClass: string;
    
    switch (buttonType) {
        case 'green':
            buttonClass = classes.greenButton;
            break;
        case 'red': 
            buttonClass = classes.redButton;
            break;
        case 'normal': 
            buttonClass = classes.normalButton;
            break;
        case 'naked': 
            buttonClass = classes.nakedButton;
            break;
        case 'disabled':
            buttonClass = classes.disabledButton;
            break;
        case 'naked-disabled':
            buttonClass = classes.nakedDisabledButton;
            break;
        default:
            buttonClass = classes.normalButton;
    }
    if (disabled) {
        buttonClass = classes.disabledButton;
        if (buttonType === 'naked') buttonClass = classes.nakedDisabledButton;
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