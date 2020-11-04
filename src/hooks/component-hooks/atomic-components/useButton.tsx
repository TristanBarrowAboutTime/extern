import { useMemo } from 'react';
import { ButtonType } from '../../../types/ButtonType';
import Styles from '../../../style/Styles';


type UseButtonArgs = {
    buttonType: ButtonType
    disabled: boolean
}

export const useButton = (args: UseButtonArgs) => {
    const getBgColor = (props: UseButtonArgs): string => {
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
    
    const getPadding = (args: UseButtonArgs) => {
        switch(args.buttonType) {
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
    
    const getTextColor = (args: UseButtonArgs): string => {
        if (args.disabled) {
            switch(args.buttonType) {
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
            switch(args.buttonType) {
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
    
    const getShadow = (props: UseButtonArgs): string => {
        if (props.buttonType === ButtonType.BARE || 
            props.buttonType === ButtonType.SMALL_BARE || 
            props.disabled) 
        { 
            return '0'; 
        }
        else return Styles.button.shadow;
    }
    
    const backgroundColor = useMemo(() => getBgColor(args), [args]);
    const padding = useMemo(() => getPadding(args), [args]);
    const color = useMemo(() => getTextColor(args), [args]);
    const shadow = useMemo(() => getShadow(args), [args]);
    const cursor = useMemo(() => args.disabled ? 'default' : 'cursor', [args]);

    return {
        backgroundColor,
        padding,
        color,
        shadow,
        cursor
    }
}
