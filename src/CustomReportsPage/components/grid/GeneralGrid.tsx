import * as React from 'react';
import styled from 'styled-components';

const border = '2px solid #DBDBDB'; 

const arr = [
    ['box','Name','Description','Date'],
    ['c1r2','c2r2','c3r2','c4r2']
];

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
    grid: React.ReactNode[][]
}

const bgStyle = (index: number) => {
    if (index === 0) return {backgroundColor: 'white', borderBottom: border}
    const rowIsGray = index % 2 ===1; 
    return rowIsGray ? 
    {backgroundColor: 'white'} : 
    {backgroundColor: '#F2F2F2'}
}

const GeneralGrid = (props: GeneralGridProps) => {
    const binding = useGeneralGrid({
        grid: props.grid
    });

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

type UseGeneralGridArgs = {
    grid: React.ReactNode[][]

}

const useGeneralGrid = (args: UseGeneralGridArgs) => {
    const flipArray = (array: React.ReactNode[][]) => {
        const columnHeight: number = array.length;
        let rowWidth: number = 0;
        if (columnHeight > 0) {
            rowWidth = array[0].length;
        } else {
            return [[]];
        }
    
        let newArray: any[] = [];
    
        for (let i = 0; i < rowWidth; i++) {
            newArray.push([]);
        }
    
        for (let i = 0; i < rowWidth; i++) {
            for (let j = 0; j < columnHeight; j++) {
                newArray[i].push(array[j][i]);
            }
        }
    
        return newArray;
    };


    return {
        columnGrid: flipArray(args.grid)
    }
}


export default GeneralGrid;