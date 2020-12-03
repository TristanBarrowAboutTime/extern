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
    
    :nth-child(even) {
        background-color: ${Styles.grid.dark};
    }
    :nth-child(odd) {
        background-color: ${Styles.grid.light};
    }
`;

type GeneralGridProps = {
    grid: GridCell[][]
    filterValue: string
}

const GeneralGrid = (props: GeneralGridProps) => {
    const binding = useGeneralGrid({filterValue: props.filterValue});

    return (
        <GridWrapper>
            <Grid>
                <thead>
                    <TableRow>
                        {props.grid[0].map((cell, key) => {
                            return cell.get(key);
                        })}
                    </TableRow>
                </thead>
                <tbody>
                    {props.grid.map((row, index) => {
                        if (binding.shouldNotRenderRow(row, index)) return null;
                        return <TableRow key={index}>
                            {row.map((cell, key) => {
                                return cell.get(key);
                            })}
                        </TableRow>
                    })}
                </tbody>
            </Grid>
        </GridWrapper>
    );
}

type UseGeneralGridArgs = {
    filterValue: string
}

const useGeneralGrid = (args: UseGeneralGridArgs) => {

    const shouldNotRenderRow = React.useCallback((gridRow: GridCell[], index: number): boolean => {
        if (index === 0) return true; 
        let shouldRender = true;
        gridRow.forEach(cell => {
            if (cell.contains(args.filterValue)) shouldRender = false;
        });
        return shouldRender;
    }, [args.filterValue]);

    return {shouldNotRenderRow};
}

export default GeneralGrid;