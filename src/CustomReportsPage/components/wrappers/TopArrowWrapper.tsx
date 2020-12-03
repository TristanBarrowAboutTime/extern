import * as React from 'react'; 
import { ReactNode } from 'react';
import styled from 'styled-components';
import Styles from '../../style/Styles';
import { Up } from '../atomic-components/CssTriangle';

type StyleProps = {
    color: string
}

const Container = styled.div`
    position: relative;
    left: 6px;
    background-color: ${Styles.color.white};
    padding: 8px;
    border: 1px solid ${(props: StyleProps) => props.color};
    border-radius: 4px;
`;

type ArrowProps = {
    pos: string
}

const BorderArrow = styled.div`
    position: absolute;
    top: -8px;
    ${(props: ArrowProps) => props.pos}
`;

const BgArrow = styled.div`
    position: absolute;
    top: -7px;
    ${(props: ArrowProps) => props.pos}
`;

type TopArrowWrapperProps = {
    children: ReactNode
    color: string
    position: number
}

const TopArrowWrapper = (props: TopArrowWrapperProps) => {
    const binding = useTopArrowWrapper({
        position: props.position
    });

    return (
        <Container color={props.color}>
            <BorderArrow pos={binding.pos}>
                <Up color={props.color} size={8}/>
            </BorderArrow>
            <BgArrow pos={binding.pos}>
                <Up color={Styles.color.white} size={8} />
            </BgArrow>
            {props.children} 
        </Container>
    );
}

type UseTopArrowWrapperArgs = {
    position: number
}

const useTopArrowWrapper = (args: UseTopArrowWrapperArgs) => {
    let pos = '';

    if (args.position > 0) 
        pos = `left: ${args.position}px;`;
    else if (args.position < 0) 
        pos = `right: ${-1 * args.position}px;`; 
    else 
        pos = `display: none;`;

    return {pos};
}


export default TopArrowWrapper;