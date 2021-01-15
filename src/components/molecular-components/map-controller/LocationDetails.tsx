import * as React from 'react';
import styled from 'styled-components/native';
import Tabs, { useWithTabs } from '../../molecular-components/Tabs';
import MapDetailsFrame from '../../frames/MapDetailsFrame';
import LocationAssets from '../map-detail-lists/LocationAssets';
import LocationEmployee from '../map-detail-lists/LocationEmployee';
import LocationForm from '../map-detail-lists/LocationForms';



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

`;

const LocationLabel = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;   

`;

export enum LocationDetailsTabs {
    EMPLOYEES = 'Employees',
    ASSETS = 'Assets',
    FORMS = 'Forms'
}

type LocationDetailsProps = {
    searchValue: string
}

const LocationDetails = () => {
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
                        <div>
                            Location
                        </div>
                    </LocationLabel>
                }
                tabs={<Tabs {...tabs.tabsBinding} />}
                list={
                    <>
                        {tabs.selected === LocationDetailsTabs.EMPLOYEES && (
                            <LocationEmployee
                                image={'image'}
                                employee={'employee name'}
                                site={'site name'}

                            />
                        )}
                        {tabs.selected === LocationDetailsTabs.ASSETS && (
                            <LocationAssets
                                assets={'name of assets'}
                                service={'type of service'}
                                employee={'employee name'}
                                time={'9 pm'}
                                activity={'last activity'}


                            />
                        )}
                        {tabs.selected === LocationDetailsTabs.FORMS && (
                            <LocationForm
                                formlist={'formlist'}
                                employee={'employee name'}
                                time={'3pm'}
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