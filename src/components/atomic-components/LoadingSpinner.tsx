import * as React from 'react';
import { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {opacity: 1}
    100% {opacity: 0}
`;

type SpinProps = {
    duration: number
    size: number
}
type SProps = {
    deg: number, 
    color: string,
    spokeWidth: number
    roundness: number
    displacement: number
    length: number
}

const Spin = styled.div`
    display: inline-block;
    position: relative;
    width: ${(props: SpinProps) => props.size}px;
    height: ${(props: SpinProps) => props.size}px;

    & div {
        transform-origin: ${(props: SpinProps) => `${props.size/2}px ${props.size/2}px`};
        animation: ${animation} ${(props: SpinProps) => props.duration}s linear infinite;
    }
`;


const Spoke = styled.div`
    transform: ${(props: SProps) => `rotate(${props.deg}deg)`};

    &:after {
        content: " ";
        display: block;
        position: absolute;
        top: 0px;
        left: ${(props: SProps) => props.displacement}px;
        width: ${(props: SProps) => props.spokeWidth}px;
        height: ${(props: SProps) => props.length}px;
        border-radius: ${(props: SProps) => props.roundness}%;
        background: ${(props: SProps) => props.color};
    }
`;

type LoadingSpinnerProps = {
    spokes?: number
    duration?: number
    color?: string
    spokeWidth?: number
    roundness?: number
    size?: number
    length?: number
}

const LoadingSpinner = ({
    spokes = 12,
    duration = 1.2,
    color = 'black',
    spokeWidth = 6,
    roundness = 20,
    size = 80,
    length = 18
}: LoadingSpinnerProps) => {
    const percent = useMemo(() => 360 / spokes, [spokes]);
    const arr = useMemo(() => {
        return new Array(spokes).fill(0).map((_,i) => 'key' + i);
    }, [spokes]); 
    const transformOrigin = size/2;
    const displacement = transformOrigin - (spokeWidth / 2);

    return (
        <>
            <Spin size={size} duration={duration}>
                {arr.map((key, index) => {
                    const delay = `-${(duration*index)/spokes}s`
                    console.log(delay);
                    return <Spoke
                        style={{ animationDelay: delay}}
                        length={length}
                        displacement={displacement}
                        roundness={roundness}
                        spokeWidth={spokeWidth}
                        color={color}
                        key={key}
                        deg={index*percent} 
                    />
                })}
            </Spin>
        </>
    )
}


export default LoadingSpinner;