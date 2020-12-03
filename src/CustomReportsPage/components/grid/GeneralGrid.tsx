import * as React from 'react';
import styled from 'styled-components';
import Styles from '../../style/Styles';
import { GridCell } from './cells/GridCell';

const GridWrapper = styled.div`
    display: inline-block;
`;

const Grid = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: ${Styles.grid.border};
    border-right: 0;
    padding: 0;
`;

const TableRow = styled.tr`
    border-collapse: collapse;
    
    :nth-child(odd) {
        background-color: ${Styles.grid.dark};
    }
    :nth-child(even) {
        background-color: ${Styles.grid.light};
    }
    :nth-child(1) {
        background-color: ${Styles.grid.light};
    }

`;

type GeneralGridProps = {
    grid: GridCell[][]
    filterValue: string
}

const GeneralGrid = (props: GeneralGridProps) => {

    const shouldNotRenderRow = (gridRow: GridCell[], index: number): boolean => {
        if (index === 0) return false; 
        let shouldRender = true;
        gridRow.forEach(cell => {
            if (cell.contains(props.filterValue)) shouldRender = false;
        });
        return shouldRender;
    }

    return (
        <GridWrapper>
            <Grid>
                {props.grid.map((row, index) => {
                    if (shouldNotRenderRow(row, index)) return null;
                    return (
                        <TableRow>
                            {row.map(cell => {
                                return cell.get();
                            })}
                        </TableRow>
                    );
                })}
            </Grid>
        </GridWrapper>
    );
}

export default GeneralGrid;