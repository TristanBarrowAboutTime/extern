import * as React from 'react';
import { Left } from '../../atomic-components/CssTriangle';
import Style from '../../../style/Styles';
import { PopoutMenuEvent } from '../../../types/PopoutMenuEvent';
import { usePopoutMenu } from '../../../hooks/component-hooks/molecular-components/usePopoutMenu';
import styled from 'styled-components';

/**
 * PopoutMenu is a configurable popout that will open on a custom event and 
 * will close once the user clicks anywhere outside of the popout. 
 * 
 * Usage:
 * Import Both the component "PopoutMenu" and its hook "usePopoutMenu" from 
 * '~/hooks/component-hooks/usePopoutMenu'. 
 * 
 * Call the hook and destructure the result using object notation:
 * 
 * const { menuEvent, isOpen, open, close? } = useWithPopoutMenu();
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

export type EventType = React.MouseEvent<HTMLDivElement, MouseEvent>;

type ArrowPopout = {
    children: React.ReactChild | React.ReactChild[] | React.ReactNode
    menuEvent: PopoutMenuEvent
    padding?: number
    tickPosition?: number // how far down the tick is from the top
    borderColor?: string
    bgColor?: string
    horizontalFix?: number | null
    verticalFix?: number | null
    vPosition?: number
    hPosition?: number
}

const Container = styled.div`
    position: fixed;
    display: block;
    padding: 0;
    border-radius: 4px;
    background-color: white;
    z-index: 10;
`;

const Arrow = styled.div`
    position: absolute;
`;

const ArrowPopout = ({
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
}: ArrowPopout) => {
    
    const binding = usePopoutMenu({
        menuEvent, 
        padding, 
        tickPosition, 
        vPosition, 
        hPosition, 
        horizontalFix, 
        verticalFix,
        borderColor
    });

    return (
        <Container ref={binding.ref} style={binding.menuContainerStyle}>
            <Arrow style={binding.backgroundArrowStyle}>
                <Left color={borderColor} />
            </Arrow>
            <Arrow style={binding.foregroundArrowStyle}>
                <Left color={bgColor} />
            </Arrow>
            {children}
        </Container>
    );
}

const Normal = styled.div`
    margin-left: 10px;
    margin-right: 30px;
    :hover {
        cursor: pointer;
    }
`;

const Warning = styled(Normal)`
    color: ${Style.color.red};

`;

const HorizontalRule = styled.div`
    height: 1px;
    margin-top: 5px;
    margin-bottom: 7px;
    border-top: 1px solid #525252;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
`;

const Disabled = styled(Normal)`
    color: ${Style.color.gray.medium};
`;

type MenuItemProps = {
    children: React.ReactChild
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const NormalMenuItem = (props: MenuItemProps) => {
    return <Normal onClick={props.onClick}>{props.children}</Normal>;
}

export const WarningMenuItem = (props: MenuItemProps) => {
    return <Warning onClick={props.onClick}>{props.children}</Warning>;
}

export const DisabledMenuItem = (props: MenuItemProps) => {
    const onClickOverride = () => alert('That button is currently disabled');
    return <Disabled onClick={onClickOverride}>{props.children}</Disabled>
}

export const HR = () => <HorizontalRule />;

export default ArrowPopout;