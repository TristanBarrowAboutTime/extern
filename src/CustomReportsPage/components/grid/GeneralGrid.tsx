import * as React from 'react';
import styled from 'styled-components';
import { useGeneralGrid } from '../../hooks/component-hooks/grid/useGeneralGrid';
import { GridCell } from './cells/InsertCells';

const border = '2px solid #DBDBDB'; 

const GridWrapper = styled.div`
    display: inline-block;
`;

const Grid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border: ${border};
    border-right: 0;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: ${border};
`;

const Cell = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 34px;
    padding: 2px;
`;

type GeneralGridProps = {
    grid: GridCell[][]
}

const bgStyle = (index: number) => {
    if (index === 0) return {backgroundColor: 'white', borderBottom: border}
    const rowIsGray = index % 2 ===1; 
    return rowIsGray ? 
    {backgroundColor: 'white'} : 
    {backgroundColor: '#F2F2F2'}
}

const GeneralGrid = (props: GeneralGridProps) => {
    const binding = useGeneralGrid(props.grid);

    return (
        <GridWrapper>
            <Grid>
                {binding.columnGrid.map((column, columnIndex) => {
                    return (
                        <Column>
                            {column.map((cell: React.ReactNode, index: number) => {
                                return (
                                    <Cell style={bgStyle(index)}>
                                        {cell}
                                    </Cell>
                                );
                            })}
                        </Column>
                    );
                })}
            </Grid>
        </GridWrapper>
    );
}

export default GeneralGrid;