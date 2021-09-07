import * as React from 'react';
import { 
    VariableSizeList as List,
    ListChildComponentProps,
} from 'react-window';

type LargeListProps<T> = {
    listRef: React.Ref<List>
    items: T[]
    width: number | string
    height: number | string
    renderListRow: React.FunctionComponent<ListChildComponentProps<any>>
    getHeight: (index: number) => number 
}

const LargeList = <T extends unknown>({
    listRef,
    items,
    width,
    height,
    renderListRow,
    getHeight,
}: LargeListProps<T>) => {
    
    return ( 
        <List
            ref={listRef}
            width={width}
            height={height}
            itemCount={items.length}
            itemSize={getHeight}
        >
            {renderListRow}
        </List>
    );
}

type ListRowProps<T> = {
    rowProps: T
    index: number
    style: React.CSSProperties
    setHeight: (index: number, height: number) => void
    renderRow: (props: T, ref: React.Ref<HTMLDivElement>) => React.ReactNode, 
}

const ListRow = <T extends unknown>(props: ListRowProps<T>) => {
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (ref.current) {
            props.setHeight(props.index, ref.current.clientHeight);
        }
    }, [ref]);

    return (
        <div style={props.style}>
            {props.renderRow(props.rowProps, ref)}
        </div>
    );
}

type UseWithLargeListArgs<T> = {
    items: T[]
    width: number | string
    heightSubtraction: number
    minHeight: number
    renderRow: (props: T, rowRef: React.Ref<HTMLDivElement>) => React.ReactNode
    getItemHeight: (index?: number) => number
}

export const useWithLargeList = <T extends unknown>({
    items,
    width,
    heightSubtraction,
    minHeight,
    renderRow,
    getItemHeight, 
}: UseWithLargeListArgs<T>) => {
    const [height, setHeight] = React.useState<number>(minHeight);
    const listRef = React.useRef<List>(null);
    const rowHeights = React.useRef<any>({});

    const getHeight = (index: number) => {
        if (rowHeights.current[index] === undefined) {
            if (index === items.length - 1) {
                return getItemHeight(index) + 4;
            }
            return getItemHeight(index);
        }
        return rowHeights.current[index];
    }

    const setRowHeight = (index: number, height: number) => {
        if (height !== rowHeights.current[index]) {
            listRef.current?.resetAfterIndex(0);
            rowHeights.current = { ...rowHeights.current, [index]: height };
        }
    }

    const renderListRow: React.FunctionComponent<ListChildComponentProps<any>> = ({ index, style }) => {
        return (
            <ListRow 
                rowProps={items[index]}
                index={index}
                style={style}
                setHeight={setRowHeight}
                renderRow={renderRow}
            />
        );
    }

    React.useEffect(() => {
        const setWindowSize = () => {
            const newHeight = window.innerHeight - heightSubtraction;
            setHeight(newHeight <= minHeight ? minHeight : newHeight);
        }
        window.addEventListener('resize', setWindowSize);
        setWindowSize();
        return () => {
            window.removeEventListener('resize', setWindowSize);
        } 
    }, []);

    React.useEffect(() => {
        if (listRef !== null && listRef.current !== null && listRef.current.resetAfterIndex !== null) {
            listRef.current.resetAfterIndex(0, true);
        }
    }, [items.length]);

    return {
        bind: {
            listRef,
            items,
            width,
            height,
            renderListRow,
            getHeight,
        } as LargeListProps<T>,
    }
}

export default LargeList;