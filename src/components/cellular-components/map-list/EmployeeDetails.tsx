import * as React from 'react';
import styled from 'styled-components/native';
import MapDetailsFrame from '../../frames/MapDetailsFrame';
import UserImage, { MapEmployeeStatus } from '../../atomic-components/UserImage';
import Tabs, { useWithTabs } from '../../molecular-components/Tabs';
import EmployeeDiscList from '../../molecular-components/map-detail-lists/EmployeeDiscList';
import EmployeeHistoryList, { EmployeeHistoryTimeRecord } from '../../molecular-components/map-detail-lists/EmployeeHistoryList';
import EmployeeLocationList from '../../molecular-components/map-detail-lists/EmployeeLocationList';
import EmployeeAssetsList from '../../molecular-components/map-detail-lists/EmployeeAssetsList';
import EmployeeFormsList from '../../molecular-components/map-detail-lists/EmployeeFormsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { MapControllerActions } from '../../../pages/MapsPage';

const data: EmployeeHistoryTimeRecord[] = [
    {
        id: 1,
        time: '8:09 AM',
        isClockedIn: true,
        coordinates: { lat: 53.6897 , long: -89.2868},
        accuracy: 'High'

    },
    {
        id: 2,
        time: '5:09 PM',
        isClockedIn: false,
        coordinates: { lat: 33.6897 , long: -19.2868},
        accuracy: 'Low'

    },
    {
        id: 3,
        time: '8:09 AM',
        isClockedIn: true,
        coordinates: { lat: 53.6897 , long: -89.2868},
        accuracy: 'High'

    },
    {
        id: 4,
        time: '5:09 PM',
        isClockedIn: false,
        coordinates: { lat: 33.6897 , long: -19.2868},
        accuracy: 'Low'

    }
]

const Container = styled.View`
    display: flex;
    width: 400px;
    border-color: '#DDDDDD';
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const UserTitle = styled.Text`
    margin-left: 12px;
    font-size: 22px;

`;

const EmployeeLabel = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;   

`;

const Link = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end; 
    padding: 5px;
`;

export enum EmployeeDetailsTabs {
    DISC = 'Discrepancies ',
    HISTORY = 'History',
    LOCATION = 'Location',
    ASSETS = 'Assets',
    FORMS = 'Forms'
}

type EmployeeDetailsProps = {
    searchValue: string
    tabs: {
        tabsBinding: any // any because of binding
        selected: string
    }
    actions: MapControllerActions
}

const EmployeeDetails = (props: EmployeeDetailsProps) => {
    const { tabs, actions } = props;
    return (
        <Container>
            <MapDetailsFrame
                actions={actions}
                subjectContainer={
                    <EmployeeLabel>
                        <UserImage
                            src={null}
                            firstName={'Joseph'}
                            lastName={'Carrigan'}
                            size={60}
                            status={MapEmployeeStatus.CLOCKED_IN}
                        />
                        <UserTitle>
                            1002 Joseph Carrigan
                        </UserTitle>
                    </EmployeeLabel>
                }
                tabs={<Tabs {...tabs.tabsBinding} />}
                list={
                    <>
                        <Link>
                            Open link into the Time editor
                            <FontAwesomeIcon icon={faExternalLinkAlt} color={'gray'} />
                        </Link>
                        {tabs.selected === EmployeeDetailsTabs.DISC && (
                            <>
                                <EmployeeDiscList
                                    company={'Co-operative Limited'}
                                    time={'8:05 AM'}
                                    distance={'Clock-In is outside of GeoFence by 0.5 Miles'}
                                    notes={'Notes'}
                                    text={'I clocked in at the shop this morning'}
                                />
                                <EmployeeDiscList
                                    company={'10000 West ERD (K-Rite)'}
                                    time={'5:35 PM0'}
                                    distance={'Clock-OUT is outside of Geofence by 10.5 Miles'}    
                                    notes={'Notes'}
                                    text={'I forgot to clock out at 5:00, sorry!'}
                                />
                            </>
                        )}
                        {tabs.selected === EmployeeDetailsTabs.HISTORY && (
                            <>
                                <EmployeeHistoryList
                                    timeRecords={data}
                                />
                            </>
                            )}
                        {tabs.selected === EmployeeDetailsTabs.LOCATION && (
                            <EmployeeLocationList
                                inTime={'8:05am'}
                                outTime={'11:56am'}
                                companyArea={'00006709 UFA Co-operative Limited'}
                                serviceArea={'100300.00 Full Service'}
                            />
                        )}
                        {tabs.selected === EmployeeDetailsTabs.ASSETS && (
                            <EmployeeAssetsList
                                inTime={'8:05am'}
                                outTime={'11:56am'}
                                assetsname={'SP-WM-07 Miller Big Blue 450 Duo'}
                                company={'00006709 UFA Co-operative Limited'}
                                servicearea={'100300.00 Full Service'}                           
                               
                            />
                        )}
                        {tabs.selected === EmployeeDetailsTabs.FORMS && (
                            <EmployeeFormsList
                                formlist={'Missing Hours'}
                                time={'1:11pm'}
                            />
                        )}
                    </>
                }
              
            />
        </Container>
    )
}

export const useWithEmployeeDetails = () => {
    const tabs = useWithTabs({
        tabs: [
            EmployeeDetailsTabs.DISC,
            EmployeeDetailsTabs.HISTORY,
            EmployeeDetailsTabs.LOCATION,
            EmployeeDetailsTabs.ASSETS,
            EmployeeDetailsTabs.FORMS
        ],
        selected: EmployeeDetailsTabs.DISC
    })
    return tabs; // employee tabs
}



export default EmployeeDetails;