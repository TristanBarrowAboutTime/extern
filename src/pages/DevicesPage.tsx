import * as React from 'react';
import styled from 'styled-components';
import LocationCard, { LocationCardProps } from '../components/cards/LocationCard';
import LargeList, { useWithLargeList } from '../components/molecular-components/LargeList';
const Container = styled.div`
    
`;

let locs: LocationCardProps[] = [];
for (let i = 0; i < 11; i++) {
    const text = i % 2 === 0 ? `Awesome Bay of the Northern Country manyother things are cool to. Sometimes I like to go to the lake an have fun` : 'Im short';
    const address = i % 2 === 0 ? `A long as something address that's cool ` : 'short address';
    
    locs.push({
        code: `${i}`,
        name: text,
        initials: 'AB',
        address,
    })
}
 
const DevicesPage = () => {
    const renderRow = (props: LocationCardProps, ref: React.Ref<HTMLDivElement>) => {
        return <LocationCard {...props} ref={ref} width={300} />
    }

    const largeList = useWithLargeList<LocationCardProps>({
        items: locs,
        width: 317,
        heightSubtraction: 35,
        minHeight: 100,
        renderRow,
        getItemHeight: () => 100, 
    });

    return ( 
        <Container>
            <LargeList {...largeList.bind} />
        </Container>
    );
}

export default DevicesPage;