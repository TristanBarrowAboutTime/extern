import * as React from 'react';
import styled from 'styled-components';

type StyleProps = {
    size: number,
    color: string,
}

const defaultColor = '#000000';
const defaultSize = 5;

const UpArrow = styled.div`
    width: 0;
    height: 0;
    border-left: ${(props: StyleProps) => `${props.size}px solid transparent`};
    border-right: ${(props: StyleProps) => `${props.size}px solid transparent`};
    border-bottom: ${(props: StyleProps) => `${props.size}px solid ${props.color}`};
`;

const DownArrow = styled.div`
    width: 0;
    height: 0;
    border-left: ${(props: StyleProps) => `${props.size}px solid transparent`};
    border-right: ${(props: StyleProps) => `${props.size}px solid transparent`};
    border-top: ${(props: StyleProps) => `${props.size}px solid ${props.color}`};
`;

const LeftArrow = styled.div`
    width: 0;
    height: 0;
    border-top: ${(props: StyleProps) => `${props.size}px solid transparent`};
    border-bottom: ${(props: StyleProps) => `${props.size}px solid transparent`};
    border-right: ${(props: StyleProps) => `${props.size}px solid ${props.color}`};
`;

const RightArrow = styled.div`
    width: 0;
    height: 0;
    border-top: ${(props: StyleProps) => `${props.size}px solid transparent`};
    border-bottom: ${(props: StyleProps) => `${props.size}px solid transparent`};
    border-left: ${(props: StyleProps) => `${props.size}px solid ${props.color}`};
`;

type CssTriangleProps = {
    style?: {}
    onClick?: () => void
    color?: string
    size?: number
}

export const Up = ({
    style = {},
    onClick,
    color = defaultColor,
    size = defaultSize,
}: CssTriangleProps) => {
    return (
        <div style={style} onClick={onClick}>
            <UpArrow size={size} color={color} />
        </div>
    );
}

export const Down = ({
    style = {},
    onClick,
    color = defaultColor,
    size = defaultSize,
}: CssTriangleProps) => {
    return (
        <div style={style} onClick={onClick}>
            <DownArrow size={size} color={color} />
        </div>
    );
}

export const Left = ({
    style = {},
    onClick,
    color = defaultColor,
    size = defaultSize,
}: CssTriangleProps) => {
    return (
        <div style={style} onClick={onClick}>
            <LeftArrow size={size} color={color} />
        </div>
    );
}

export const Right = ({
    style = {},
    onClick,
    color = defaultColor,
    size = defaultSize,
}: CssTriangleProps) => {
    return (
        <div style={style} onClick={onClick}>
            <RightArrow size={size} color={color} />
        </div>
    );
}

export const VSpacer = ({size}: {size: number}) => {
    return (
        <div style={{
            width: 1,
            height: size
        }}/>
    );
}

export const HSpacer = ({size}: {size: number}) => {
    return (
        <div style={{
            width: size,
            height: 1
        }}/>
    );
}