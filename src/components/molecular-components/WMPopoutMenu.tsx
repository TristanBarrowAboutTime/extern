import React, { useState, useRef, useEffect, MutableRefObject } from 'react';
import { createUseStyles } from 'react-jss';
import { Left } from '../atomic-components/WMCssTryangle';
import WMStyle from '../../style/WMStyles';

type PopoutProps = {
    children: React.ReactChild | React.ReactChild[]
    padding: number
    tickPosition: number
    borderColor?: string
    bgColor?: string
    close: () => void
    hPosition: number
    vPosition: number
    h: number
    v: number
}

const Popout = ({
    children,
    padding,
    tickPosition,
    borderColor = WMStyle.color.gray.medium,
    bgColor = WMStyle.color.white,
    close,
    hPosition,
    vPosition,
    h,
    v
}: PopoutProps) => {
    
    const useStyles = createUseStyles({
        menuContainer: {
            position: 'fixed',
            left: h,
            top: v, 
            marginLeft: hPosition,
            marginTop: vPosition,
            display: 'block',
            padding, 
            borderRadius: 4,
            backgroundColor: 'white',
            border: {
                style: 'solid',
                color: borderColor,
                width: 1,
            }
        },
        backgroundArrow: {
            position: 'absolute',
            marginLeft: `-${padding + 6}px`,
            marginTop: 4 - padding + tickPosition,
        },
        foregroundArrow: {
            position: 'absolute',
            marginLeft: `-${padding + 5}px`,
            marginTop: 4 - padding + tickPosition,
        }
    });

    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current.contains(e.target as Node)) return;
            close();
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
            close();
        }
    },[close, ref]);

    const classes = useStyles();
    return (
        <div ref={ref} className={classes.menuContainer}>
            <Left className={classes.backgroundArrow} color={borderColor} />
            <Left className={classes.foregroundArrow} color={bgColor} />
            {children}
        </div>
    );
}

export type MenuEvent = {
    h: number
    v: number
    isOpen: boolean
    close: () => void
}

type WMPopoutMenuProps = {
    children: React.ReactChild | React.ReactChild[]
    menuEvent: MenuEvent
    padding: number
    tickPosition: number
    borderColor?: string
    bgColor?: string
    horizontalFix?: number | null | undefined
    verticalFix?: number | null | undefined
    hPosition?: number
    vPosition?: number
}

/**
 * this is an optimization allowing for 
 */
const WMPopoutMenu = ({
    children,
    menuEvent, 
    padding,
    tickPosition,
    borderColor,
    bgColor,
    horizontalFix,
    verticalFix,
    hPosition = 0,
    vPosition = 0,
}: WMPopoutMenuProps) => {
    
    return menuEvent.isOpen ? (
        <Popout 
            children={children}
            padding={padding}
            tickPosition={tickPosition}
            borderColor={borderColor}
            bgColor={bgColor}
            h={horizontalFix || menuEvent.h}
            v={verticalFix || menuEvent.v}
            close={menuEvent.close}
            hPosition={hPosition}
            vPosition={vPosition}
        />
    ) : (null);
}


export const usePopoutMenu = () => {
    const [isOpen, setIsOpenTo] = useState(false);
    const [h, setHorizontal] = useState(0);
    const [v, setVertical] = useState(0);

    return {
        menuEvent: {h, v, isOpen, close: () => setIsOpenTo(false)} as MenuEvent,
        open: (e: any) => {
            setIsOpenTo(true);
            setHorizontal(e.clientX);
            setVertical(e.clientY);
        },
        close: () => setIsOpenTo(false),
    };
}

export default WMPopoutMenu;