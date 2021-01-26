import * as React from 'react';
import styled from 'styled-components/native';
import Tabs, { useWithTabs } from '../../molecular-components/Tabs';
import MapDetailsFrame from '../../frames/MapDetailsFrame';
import LocationAssets from '../../molecular-components/map-detail-lists/LocationAssets';
import LocationEmployee from '../../molecular-components/map-detail-lists/LocationEmployee';
import LocationForm from '../../molecular-components/map-detail-lists/LocationForms';
import LocationIcon from '../../atomic-components/LocationIcon';
import { locationAssetsData, locationEmployeeData, locationFormsData } from '../../../mock-data/map-details/locationListData';
import { MapControllerActions } from '../../../pages/MapsPage';

enum MapEmployeeStatus {
    CLOCKED_IN,
    CLOCKED_OUT,
    UNKNOWN
}

const Container = styled.View`
    display:flex;
    width: 400;
    border-color: '#ddd';
    padding: 20px;
`;
const LocationTitle = styled.Text`
    margin-left: 12px;
    font-size:22px;
    color: #525252;
`;

const SubTitle = styled.Text`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    color: #525252;
`;

const Column = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

`;

const LocationLabel = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start; 
    padding: 15px 15px 15px 15px;  

`;

export enum LocationDetailsTabs {
    EMPLOYEES = 'Employees',
    ASSETS = 'Assets',
    FORMS = 'Forms'
}



type LocationDetailsProps = {
    searchValue: string
    tabs: {
        tabsBinding: any // any because of binding
        selected: string
    }
    actions: MapControllerActions
}

const LocationDetails = (props: LocationDetailsProps) => {
    const { searchValue, tabs, actions } = props;

    return (
        <Container>
            <MapDetailsFrame
                subjectContainer={
                    <LocationLabel>
                        <LocationIcon
                            first={'Erda'}
                            last={'Water'}
                            color={'#9B3E38'}
                            size={45}
                        />
                        <Column>
                            <LocationTitle>
                                1345 Erda Water
                      </LocationTitle>

                            <SubTitle>
                                8740 UT-36, Lake Point, UT 84074
                    </SubTitle>
                        </Column>
                    </LocationLabel>
                }
                tabs={<Tabs {...tabs.tabsBinding} />}
                list={
                    <>
                        {tabs.selected === LocationDetailsTabs.EMPLOYEES && (
                            <LocationEmployee
                                locationEmployeeRecord={locationEmployeeData}
                                filterValue={props.searchValue}
                            />
                        )}
                        {tabs.selected === LocationDetailsTabs.ASSETS && (
                            <LocationAssets
                                locationAssetsRecord={locationAssetsData}
                                filterValue={props.searchValue}
                            />
                        )}
                        {tabs.selected === LocationDetailsTabs.FORMS && (
                            <LocationForm
                                locationFormsRecord={locationFormsData}
                                filterValue={props.searchValue}
                            />

                        )}
                    </>
                }
                actions={props.actions}
            />
        </Container>
    )
}

export const useWithLocationDetails = () => {
    const tabs = useWithTabs({
        tabs: [
            LocationDetailsTabs.EMPLOYEES,
            LocationDetailsTabs.ASSETS,
            LocationDetailsTabs.FORMS
        ],
        selected: LocationDetailsTabs.EMPLOYEES
    });

    return tabs;
}

export default LocationDetails;