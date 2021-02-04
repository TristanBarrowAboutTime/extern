import * as React from 'react';
// import { View, Text } from 'react-native';
// import SortingHeader from './SortingHeader';
// import OrderedDisplayList from './OrderedDisplayList';

const headerList = [
    {
        text: 'hello',
        isDown: true,
        preSpace: 4
    },
    {
        text: 'hello',
        isDown: true,
        preSpace: 4
    }
]

type ListThingy = {
    id: number
    name: string
}

type SortableListProps<T> = {
    data: T[]
    order: T
    template: (item: T) => React.ReactNode
}

const SortableList = <T extends unknown>(props: SortableListProps<T>) => {
    return (
        <>
            {/* <SortingHeader 
                headerItems={headerList} 
            />
            <OrderedDisplayList
                listItems={props.data}
                getOrder={(item: T) => 0}
                template={(item: T) => props.template(item)}
            /> */}
        </>           
    );
}

export default SortableList;