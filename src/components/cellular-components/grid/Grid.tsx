import * as React from 'react';
import { VariableSizeList as List } from 'react-window';
import styled from 'styled-components';

enum GridColumnType {
    DISPLAY 
}

const GridRow = styled.div`
    display: flex; 
    flex-direction: row;
`;


// These row heights are arbitrary.
// Yours should be based on the content of the row.
type GridProps<T> = {
    items: T[]
    columns: GridColumnType[]
    height: number
}

const Grid = <T extends unknown>(props: GridProps<T>) => {

    const getItemSize = (index: number) => {
        return 21;
    }

    const Row = ({ index, style }: {index: number, style: React.CSSProperties }) => {
        return (
            <div style={style}>
                <GridRow>
                    hi
                </GridRow>
            </div>
        )
    }

                // {props.columns.map((col) => {<div>hi</div>})}
    return (
        <List
            height={props.height}
            itemCount={100}
            itemSize={getItemSize}
            width={300}
        >
            {Row}
        </List>
    );
}

type UseWithGridArgs = {
    minHeight: number 
    heightSubtraction: number
}

export const useWithGrid = <T extends unknown>({
    minHeight,
    heightSubtraction,
}: UseWithGridArgs) => {
    const [height, setHeight] = React.useState<number>(minHeight);
    React.useEffect(() => {
        const setWindowSize = () => {
            const newHeight = window.innerHeight - heightSubtraction;
            setHeight(newHeight);
        }
        window.addEventListener('resize', setWindowSize);
        setWindowSize();
        return () => {
            window.removeEventListener('resize', setWindowSize);
        } 
    }, []);
    return {
        bind: {
            height,
        } as GridProps<T>
    }
}

export default Grid;