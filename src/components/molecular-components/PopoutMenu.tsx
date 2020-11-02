import React, { useState, useEffect, useRef, useCallback, useMemo, MutableRefObject } from 'react';
import { createUseStyles } from 'react-jss';
import { Left } from '../atomic-components/CssTriangle';
import Style from '../../style/Styles';
import { PopoutMenuEvent } from '../../types/PopoutMenuEvent';

/**
 * Description:
 * PopoutMenu is a configurable popout that will open on a custom event and 
 * will close once the user clicks anywhere outside of the popout. 
 * 
 * Usage:
 * Import Both the component "PopoutMenu" and its hook "usePopoutMenu" from 
 * '~/hooks/component-hooks/usePopoutMenu'. 
 * 
 * Call the hook and destructure the result using object notation:
 * 
 * const { menuEvent, isOpen, open, close?} = usePopoutMenu();
 * 
 * The three required attributes are "menuEvent", "isOpen" and "open". 
 * 
 * Pass "menuEvent" directly into the component on the "menuEvent" prop.
 * 
 * Use "isOpen" to conditionally render the Popout.
 * 
 * Pass "open" directly to an onClick handler so it can capture the 
 * "MouseEvent" on the handler or pass it a viable "MouseEvent". 
 * 
 * If you need to "close" the menu in a way other than the default behavior, 
 * call "close".
 * 
 * If you have nested PopoutMenu's you will need multiple calls to "usePopoutMenu".
 */

type PopoutMenuProps = {
    children: React.ReactChild | React.ReactChild[]  // normal props.children
    menuEvent: PopoutMenuEvent
    padding?: number                                 // padding that goes around the 
    tickPosition?: number                            // how far down the tick is from the top
    borderColor?: string                             // border color
    bgColor?: string                                 // background color 
    horizontalFix?: number | null
    verticalFix?: number | null
    vPosition?: number
    hPosition?: number
}

const PopoutMenu = ({
    children,
    menuEvent,
    padding = 16,
    tickPosition = 10,
    borderColor = Style.color.gray.medium,
    bgColor = Style.color.white,
    vPosition = -20,
    hPosition = 10,
    horizontalFix = null,
    verticalFix = null
}: PopoutMenuProps) => {
    
    const {
        ref,
        menuContainerStyle,
        backgroundArrowStyle,
        foregroundArrowStyle

    } = usePopoutMenu({
        menuEvent, 
        padding, 
        tickPosition, 
        vPosition, 
        hPosition, 
        horizontalFix, 
        verticalFix,
        borderColor
    });

    const classes = useStyles();
    return (
        <div ref={ref} className={classes.menuContainer} style={menuContainerStyle}>
            <div className={classes.arrow} style={backgroundArrowStyle}>
                <Left color={borderColor} />
            </div>
            <div className={classes.arrow} style={foregroundArrowStyle}>
                <Left color={bgColor} />
            </div>
            {children}
        </div>
    );
}

const useStyles = createUseStyles({
    menuContainer: {
        position: 'fixed',
        display: 'block',
        padding: 0,
        borderRadius: 4,
        backgroundColor: 'white',
    },
    arrow: {
        position: 'absolute',
    }
});

// for use when importing the component
export const useWithPopoutMenu = () => {

    const [isOpen, setIsOpenTo] = useState(false);
    const [h, setHorizontal] = useState(0);
    const [v, setVertical] = useState(0);
    const close = useCallback(() => setIsOpenTo(false), []);

    return {
        isOpen,
        menuEvent: {h, v, isOpen, close} as PopoutMenuEvent,
        open: (e: any) => {
            setIsOpenTo(true);
            setHorizontal(e.clientX);
            setVertical(e.clientY);
        },
        close
    };
}

type UsePopoutMenuArgs = {
    menuEvent: PopoutMenuEvent
    padding: number
    tickPosition: number
    horizontalFix: number | null
    verticalFix: number | null
    hPosition: number
    vPosition: number
    borderColor: string
}

// for use inside the component its self 
export const usePopoutMenu = ({
    menuEvent,
    padding,
    tickPosition,
    horizontalFix,
    verticalFix,
    hPosition,
    vPosition,
    borderColor
}: UsePopoutMenuArgs) => {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current.contains(e.target as Node)) return;
            menuEvent.close();
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
            menuEvent.close();
        }
    }, [menuEvent.close, ref]);
    
    
    const menuContainerStyle = useMemo(() => {
        const left = horizontalFix || menuEvent.h;
        const top = verticalFix || menuEvent.v;
        return {
            padding,
            left,
            top, 
            marginLeft: hPosition,
            marginTop: vPosition,
            border: `1px solid ${borderColor}`
        }

    }, [
        padding, 
        horizontalFix, 
        verticalFix, 
        menuEvent,
        hPosition,
        vPosition,
        borderColor
    ]);

    const backgroundArrowStyle = useMemo(() => {
        return {
            marginLeft: `-${padding + 6}px`,
            marginTop: 4 - padding + tickPosition,
        }
    },[padding, tickPosition]);

    const foregroundArrowStyle = useMemo(() => {
        return {
            marginLeft: `-${padding + 5}px`,
            marginTop: 4 - padding + tickPosition,
        }
    },[padding, tickPosition]);

    return {
        ref,
        menuContainerStyle,
        backgroundArrowStyle,
        foregroundArrowStyle
    }
}



export default PopoutMenu;