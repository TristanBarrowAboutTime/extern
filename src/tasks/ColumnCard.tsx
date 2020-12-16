import React, { ReactNode } from 'react';
import styled from 'styled-components';

type StyleProps = {}

type Column = {
    title: string
    content: ReactNode
}

const Container = styled.div`
`;

const Title = styled.div`
    font-size: 20px;
`;


const Columns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 8px;
    transition: all .1s;
    @media only screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }

`;

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    max-width: 200px;
    height: fit-content;

    @media only screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ColumnTitle = styled.div`
    white-space: nowrap;
    margin-bottom: 8px;
`;

type ColumnCardProps = {
    title: string
    cols: Column[]
}

const ColumnCard = (props: ColumnCardProps) => {
    return (
        <Container>
            <Title>{props.title}</Title>
            <Columns>
                {props.cols.map((col) => {
                    return (
                        <ColumnContainer>
                            <ColumnTitle>{col.title}</ColumnTitle>
                            {col.content}
                        </ColumnContainer>
                    );
                })}
            </Columns>
        </Container>
    )
}

export default ColumnCard; 