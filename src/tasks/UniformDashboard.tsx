import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 8px;
    transition: all 1s;

    @media only screen and (max-width: 850px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;

    }
`;

type UniformDashboardProps = {
    children: ReactNode
}

const UniformDashboard = (props: UniformDashboardProps) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default UniformDashboard; 