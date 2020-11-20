import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';



const border = '1px solid #aaa'; 

const Container = styled.div`
    position: relative;
`;

const NormalState = styled.div`
    z-index: 1;
    position: relative;
    white-space: nowrap;
    max-width: calc(100vw - 868px);
    min-width: 106px;
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const DisplayState = styled.div`
    z-index: 2;
    white-space: pre-wrap;
    position: absolute;
    overflow: visible;
    top: -11px;
    left: -1px;
    background-color: white;
    width: calc(100vw - 400px);
    padding: 0 8px;
    border-radius: 2px;
    border: ${border};
`;

const EditState = styled.input`
    
`;

type DescriptionCellProps = {
    children: React.ReactChild | React.ReactChildren | React.ReactNode;
}

const DescriptionCell = (props: DescriptionCellProps) => {
    return (
        <Container>
            <NormalState>{props.children}</NormalState>
       </Container>
    );

}

export default DescriptionCell;