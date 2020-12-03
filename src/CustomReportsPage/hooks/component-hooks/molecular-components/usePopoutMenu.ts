import { useState, useEffect, useCallback, useMemo, useRef,MutableRefObject } from 'react';
import { PopoutMenuEvent } from '../../../types/PopoutMenuEvent';
import { useClickClosableRef } from '../../useClickCloseableRef';

// for use when importing the component
export const useWithPopoutMenu = () => {
    const [isOpen, setIsOpenTo] = useState(false);
    const [h, setHorizontal] = useState(0);
    const [v, setVertical] = useState(0);

    const close = useCallback(() => setIsOpenTo(false), []);

    const open = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsOpenTo(true);
        setHorizontal(e.clientX);
        setVertical(e.clientY);
    }, []);

    return {
        isOpen,
        menuEvent: {h, v, isOpen, close} as PopoutMenuEvent,
        open, 
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
    const ref = useClickClosableRef(() => {
        menuEvent.close();
    });
    
    
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
