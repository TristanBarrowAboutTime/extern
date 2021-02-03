import * as React from 'react';
import SortableList from '../../frames/SortableList';
import { locationData } from '../../../mock-data/locationMapData';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import LocationListTemplate from '../../molecular-components/templates/LocationListTemplate';
import { MapListLocation } from '../../../types/MapListLocation';
import { TouchableOpacity } from 'react-native';
import LocationDetails from './LocationDetails';
import { MapActions } from '../map/Map';
import { MapControllerActions } from '../../../pages/MapsPage';

const Container = styled.View`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 360px;
`;
const TextBold = styled.View`
    font-weight: 600;
`;

type MapsLocationsProps = {
    searchValue: string,
    isShowingDetails: boolean
    tabs: {
        tabsBinding: any,
        selected: string
    }
    actions: MapControllerActions
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
                        <TouchableOpacity onPress={props.actions.goToDetails}>
                            <LocationListTemplate location={location} />
                        </TouchableOpacity>
                    )}
                    postHeader={<View><Text>Active Jobs <TextBold>{locationData.length}</TextBold></Text></View>}
                    shouldDisplayItem={(item: MapListLocation) => item.jobAddress.includes(props.searchValue)}
                    sortables={{
                        locationCode: { title: 'Code', sort: (a: MapListLocation, b: MapListLocation) => (a.locationCode > b.locationCode ? -1 : 1) },
                        locationFirstName: { title: 'Name', sort: (a: MapListLocation, b: MapListLocation) => (a.locationFirstName > b.locationFirstName ? -1 : 1) },
                    }}
                />
            )}

        </Container>
    );
}

export default MapsLocations;