import * as React from 'react';
import styled from 'styled-components/native';
import Tabs, { useWithTabs } from '../../molecular-components/Tabs';
import MapDetailsFrame from '../../frames/MapDetailsFrame';
import LocationAssets from '../map-detail-lists/LocationAssets';
import LocationEmployee from '../map-detail-lists/LocationEmployee';
import LocationForm from '../map-detail-lists/LocationForms';
import SortableList from '../../frames/SortableList';
import LocationEmployeeListTemplate from '../templates/LocationEmployeeListTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocationIcon from '../../atomic-components/LocationIcon';


enum MapEmployeeStatus {
    CLOCKED_IN,
    CLOCKED_OUT,
    UNKNOWN
}

const data: LocationEmployeeType[] = [
    {
        code: 1,
        firstName: 'Roshni',
        lastName: "Raval",
        status: MapEmployeeStatus.CLOCKED_IN,
        time: '8 hrs',
        address: 'Payson, Utah',
        image: ''
    },
    {
        code: 2,
        firstName: 'Scott',
        lastName: "Jenkens",
        status: MapEmployeeStatus.CLOCKED_OUT,
        time: '8 hrs',
        address: '120459 Salt Lake City Water',
        image: ''
    }
]

const Container = styled.View`
    display:flex;
    width: 400;
    border-color: '#ddd';
    padding-left:20;
    padding-right:20;
    padding-top:20;
    padding-bottom:20;
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

type LocationEmployeeType = {
    code: number
    firstName: string
    lastName: string
    status: MapEmployeeStatus
    time: string
    address: string
    image: string
}

type LocationDetailsProps = {
    searchValue: string
}

const LocationDetails = (props:LocationDetailsProps) => {
    const tabs = useWithTabs({
        tabs: [
            LocationDetailsTabs.EMPLOYEES,
            LocationDetailsTabs.ASSETS,
            LocationDetailsTabs.FORMS
        ],
        selected: LocationDetailsTabs.EMPLOYEES

    })

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
                   
                            <SortableList 
                                data = {data}
                                template = {(employee : LocationEmployeeType) => {
                                    return (                                    
                                            <LocationEmployeeListTemplate 
                                            
                                            employee = {employee}
                                                    
                                            />

                                    )
                                }} 
                                sortables = {{
                                    code: {title: 'Code' , sort: (a: LocationEmployeeType , b: LocationEmployeeType) => (a.code > b.code ? -1 : 1)},
                                    firstName: {title: 'First' , sort: (a: LocationEmployeeType , b: LocationEmployeeType) => (a.firstName > b.firstName ? -1 : 1)},
                                    lastName: {title: 'Last' , sort: (a: LocationEmployeeType , b: LocationEmployeeType) => (a.lastName > b.lastName ? -1 : 1)},
                                    siteStatus: {title: 'Site Status' , sort: (a: LocationEmployeeType , b: LocationEmployeeType) => (a.status > b.status ? -1 : 1)},
                                         
                                }}
                                shouldDisplayItem = {(item: LocationEmployeeType) => true}
                            />                
                          
                         
                        )}
                        {tabs.selected === LocationDetailsTabs.ASSETS && (
                              <>
                            <LocationAssets                         
                                assets={'SP-WM-07 Miller Big Blue 450 Duo'}
                                employee={'1002 Joseph Carrigan'}
                                service={'100300.00 Full Service'}
                                time={'Time on Site: 25 days'}
                                activity={' 12:54pm MDT'}
                               
                            />
                            <LocationAssets
                            assets={'SP-WS-02 WALL/FLOOR SCANNER'}
                            employee={'1002 Joseph Carrigan'}
                            service={''}
                            time={'Time Assigned to Site: 45 days'}
                            activity={' '}
                            // last activity will be in the locationAsset file

                        />
                        </>
                        )}
                        {tabs.selected === LocationDetailsTabs.FORMS && (
                            <LocationForm
                                formlist={'Missing Hours'}
                                employee={'Joseph Carrigan'}
                                time={'1:11pm'}
                            />
                            
                        )}
                    </>
                }
                goToNext={() => console.log('Next')}
                goToPrev={() => console.log('Prev')}
                back={() => console.log('back')}
                />
                    </Container>
    )
}

export default LocationDetails;