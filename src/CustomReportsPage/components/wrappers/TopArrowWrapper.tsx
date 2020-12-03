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
    opacity: .99;
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
    let pos = '';
    if (props.position > 0) pos = `left: ${props.position}px;`;
    else if (props.position < 0) pos = `right: ${-1 * props.position}px;`; 
    else pos = `display: none;`;
    return (
        <Container color={props.color}>
            <BorderArrow pos={pos}>
                <Up color={props.color} size={8}/>
            </BorderArrow>
            <BgArrow pos={pos}>
                <Up color={Styles.color.white} size={8} />
            </BgArrow>
            {props.children} 
        </Container>
    );
}

export default TopArrowWrapper;