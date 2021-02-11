import * as React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const WebContainer = styled.div`
    position: relative;

`;

type Position = {
    horizontal: number
    vertical: number
}

const Popout = styled.div`
    position: absolute;
    top: ${(props: { pos: Position }) => props.pos.vertical}px;
    left: ${(props: { pos: Position }) => props.pos.horizontal}px;
`;


type RNHoverableProps = {
    isInitToOpen?: boolean
    popout: React.ReactNode
    children: React.ReactChild | React.ReactChildren
    position: { horizontal: number, vertical: number }
}

export const RNHoverableWeb = ({
    isInitToOpen = false,
    popout,
    children,
    position
}: RNHoverableProps) => {
    const [isHovered, setIsHoveredTo] = React.useState(isInitToOpen);

    const onMouseEnter = () => setIsHoveredTo(true);
    const onMouseLeave = () => setIsHoveredTo(false);

    return (
        <>
            <WebContainer
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {children}
                {isHovered && (
                    <Popout pos={position}>
                        {popout}
                    </Popout>
                )}
            </WebContainer>
        </>
    );
}

export const RNHoverableNative = ({
    isInitToOpen = false,
    popout,
    children
}: RNHoverableProps) => {
    const [isOpen, setIsOpenTo] = React.useState(isInitToOpen);

    const toggle = () => setIsOpenTo(!isOpen);

    return (
        <>
            <TouchableOpacity onPress={toggle}>
                {children}
            </TouchableOpacity>
            {isOpen && popout}
        </>
    );
}

export default Platform.select({
    native: RNHoverableNative,
    default: RNHoverableWeb 
});