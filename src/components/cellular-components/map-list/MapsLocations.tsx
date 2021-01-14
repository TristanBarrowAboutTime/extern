import * as React from 'react';
import SortableList from '../../molecular-components/SortableList';
import { locationData } from '../../../mock-data/locationMapData';
import styled from 'styled-components/native';
import LocationListTemplate from '../../molecular-components/templates/LocationListTemplate';
import { MapListLocation } from '../../../types/MapListLocation';
import { TouchableOpacity } from 'react-native';

const Container = styled.View`

`;

type MapsLocationsProps = {
    searchValue: string
}

const MapsLocations = (props: MapsLocationsProps) => {
    return (
        <Container>
            <SortableList
                data={locationData}
                template={(location: MapListLocation) => (
                    <TouchableOpacity onPress={() => console.log(location)}>
                        <LocationListTemplate location={location} />
                    </TouchableOpacity>
                )}
                shouldDisplayItem={(item: MapListLocation) => item.address.includes(props.searchValue)}
                sortables={{
                    code: { title: 'Code', sort: (a: MapListLocation, b: MapListLocation) => (a.code > b.code ? -1 : 1) },
                    name: { title: 'Name', sort: (a: MapListLocation, b: MapListLocation) => (a.name > b.name ? -1 : 1) },
                }}
            />
        </Container>
    );
}

export default MapsLocations;