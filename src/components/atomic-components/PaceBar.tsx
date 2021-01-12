import React from 'react';
import { useMemo } from 'react'; 
import styled from 'styled-components';

type ProgressStyleProps = {
    width: string
    color: string
}

const FullBar = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 24px;
    border: 1px solid black;
`;

const Progress = styled.div`
    background-color: ${(props: ProgressStyleProps) => props.color};
    width: ${(props: ProgressStyleProps) => props.width};
    height: 22px;
`;

const CenterMeter = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 20px;
    border: 1px solid black;
`;

type ProgressBarProps = {
    pace: number
    needed: number
}

const ProgressBar = ({pace, needed}: ProgressBarProps) => {
    const binding = usePaceBar({pace, needed});
    return (
        <FullBar>
            <Progress color={binding.color} width={binding.width} />
            <CenterMeter />
        </FullBar>
    );
}

type UsePaceBarArgs = {
    pace: number
    needed: number
}

const usePaceBar = (args: UsePaceBarArgs) => {

    const percent = useMemo(() => {
        let pace = args.pace;
        if (args.pace > args.needed) {
            pace = pace - args.needed;
            pace = 2 * ((1 / (1 + Math.pow(Math.E, -pace / args.needed))) - 0.5); // sigmoid
            pace = pace * args.needed + args.needed;
        }
        return pace / args.needed * 50;
    }, [args.pace, args.needed]);

    const color = useMemo(() => percent >= 50 ? 'green' : '', [percent]);
    const width = useMemo(() => `${percent}%`, [percent]);
    return {
        color,
        width
    }
}

export default ProgressBar;