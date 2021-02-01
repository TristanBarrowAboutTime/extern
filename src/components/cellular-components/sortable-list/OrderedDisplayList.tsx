import * as React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    
`;

type ListItemStyle = {
    order: number
}

const ListItem = styled.View`
    order: ${(props: ListItemStyle) => props.order};
`;

type OrderDisplayListProps<T> = {
    listItems: T[]
    getOrder: (id: T) => number 
    template: (item: T) => React.ReactNode
}

const OrderedDisplayList = <T extends unknown>(props: OrderDisplayListProps<T>) => {
    return (
        <Container>
            {props.listItems.map((item: T) => {
                return (
                    <ListItem order={props.getOrder(item)}>
                        {props.template(item)}
                    </ListItem>
                ); 
            })}
        </Container>
    )
}

export default OrderedDisplayList;