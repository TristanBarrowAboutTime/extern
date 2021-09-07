import React, { ReactNode } from 'react';
import styled from 'styled-components';

type StyleProps = {
}

const Container = styled.div`
    display: flex;
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    border-radius: 4px;
    margin: 8px;
    padding: 16px;
    transition: all .2s ease;
    width: calc(100%/2 - 16px);

    @media only screen and (min-width: 1150px) {
        width: calc(100%/3 - 16px);    
    }

    @media only screen and (max-width: 850px) {
        width: auto;
        flex-grow: 1;
    }

    
`;

type CardProps = {
    children: ReactNode
}

const Card = (props: CardProps) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default Card; 