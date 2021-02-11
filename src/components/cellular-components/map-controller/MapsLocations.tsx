import * as React from 'react';
import SortableList from '../../frames/SortableList';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import LocationListTemplate from '../../molecular-components/templates/LocationListTemplate';
import { MapListLocation } from '../../../types/MapListLocation';
import { TouchableOpacity } from 'react-native';
import LocationDetails from './LocationDetails';
import { MapControllerActions } from '../../../pages/MapsPage';
import { useMapLocationsData, LocationMapControllerData } from '../../../hooks/loadable-data/live-maps/controller/locations/useMapLocationsData';

const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
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
    const locationData = useMapLocationsData();
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
                    template={(location: LocationMapControllerData) => (
                        <TouchableOpacity onPress={props.actions.goToDetails}>
                            <LocationListTemplate location={location} />
                        </TouchableOpacity>
                    )}
                    spacingArray={[40, 0, 0, 100]}
                    shouldDisplayItem={(item: LocationMapControllerData) => item.jobAddress.includes(props.searchValue)}
                    postHeader={<View><Text>Active Jobs <TextBold>{locationData.length}</TextBold> </Text></View>}
                    sortables={{
                        locationCode: { title: 'Code', sort: (a: LocationMapControllerData, b: LocationMapControllerData) => (a.locationCode > b.locationCode ? -1 : 1) },
                        locationFirstName: { title: 'Name', sort: (a: LocationMapControllerData, b: LocationMapControllerData) => (a.locationFirstName > b.locationFirstName ? -1 : 1) },
                    }}
                />
            )}

        </Container>
    );
}

export default MapsLocations;