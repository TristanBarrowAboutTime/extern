import * as React from 'react';
import SortableList from '../../frames/SortableList';
import { locationData } from '../../../mock-data/locationMapData';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import LocationListTemplate from '../../molecular-components/templates/LocationListTemplate';
import { MapListLocation } from '../../../types/MapListLocation';
import { TouchableOpacity } from 'react-native';
import LocationDetails from './LocationDetails';

const Container = styled.View``;


type MapsLocationsProps = {
    searchValue: string,
    isShowingDetails: boolean
    tabs: {
        tabsBinding: any,
        selected: string
    }
    actions: any
}

const MapsLocations = (props: MapsLocationsProps) => {
    return (
        <Container>
            {props.isShowingDetails ? (
                <LocationDetails 
                    searchValue={props.searchValue}
                    tabs={props.tabs}
                    actions={props.actions}  
                />
            ) : (
                <SortableList
                    data={locationData}
                    template={(location: MapListLocation) => (
                        <TouchableOpacity onPress={() => console.log(location)}>
                            <LocationListTemplate location={location} />
                        </TouchableOpacity>
                    )}
                    postHeader={<View><Text>Active Jobs {locationData.length}</Text></View>}
                    shouldDisplayItem={(item: MapListLocation) => item.address.includes(props.searchValue)}
                    sortables={{
                        code: { title: 'Code', sort: (a: MapListLocation, b: MapListLocation) => (a.code > b.code ? -1 : 1) },
                        name: { title: 'Name', sort: (a: MapListLocation, b: MapListLocation) => (a.name > b.name ? -1 : 1) },
                    }}
                />
            )}

        </Container>
    );
}

export default MapsLocations;