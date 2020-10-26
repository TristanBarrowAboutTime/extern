import React from 'react';
import { createUseStyles } from 'react-jss';
import { Left } from '../atomic-components/WMCssTriangle';
import WMStyle from '../../style/WMStyles';
import { PopoutMenuEvent } from '../../types/PopoutMenuEvent';
import { useWMPopoutMenu } from '../../hooks/component-hooks/useWMPopoutMenu';

/**
 * Description:
 * WMPopoutMenu is a configurable popout that will open on a custom event and 
 * will close once the user clicks anywhere outside of the popout. 
 * 
 * Usage:
 * Import Both the component "WMPopoutMenu" and its hook "usePopoutMenu" from 
 * '~/hooks/component-hooks/useWMPopoutMenu'. 
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
 * If you have nested WMPopoutMenu's you will need multiple calls to "usePopoutMenu".
 */

type WMPopoutMenuProps = {
    children: React.ReactChild | React.ReactChild[] // normal props.children
    menuEvent: PopoutMenuEvent
    padding?: number                                 // padding that goes around the 
    tickPosition?: number                            // how far down the tick is from the top
    borderColor?: string                            // border color
    bgColor?: string                                // background color 
    horizontalFix?: number | null
    verticalFix?: number | null
    vPosition?: number
    hPosition?: number
}

const WMPopoutMenu = ({
    children,
    menuEvent,
    padding = 10,
    tickPosition = 10,
    borderColor = WMStyle.color.gray.medium,
    bgColor = WMStyle.color.white,
    vPosition = -20,
    hPosition = 10,
    horizontalFix = null,
    verticalFix = null
}: WMPopoutMenuProps) => {
    
    const {
        ref,
        menuContainerStyle,
        backgroundArrowStyle,
        foregroundArrowStyle

    } = useWMPopoutMenu({
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

export default WMPopoutMenu;