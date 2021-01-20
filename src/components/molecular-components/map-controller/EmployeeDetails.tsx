import * as React from 'react';
import styled from 'styled-components/native';
import MapDetailsFrame from '../../frames/MapDetailsFrame';
import UserImage, { MapEmployeeStatus } from '../../atomic-components/UserImage';
import Tabs, { useWithTabs } from '../../molecular-components/Tabs';
import EmployeeDiscList from '../map-detail-lists/EmployeeDiscList';
import EmployeeHistoryList from '../map-detail-lists/EmployeeHistoryList';
import EmployeeLocationList from '../map-detail-lists/EmployeeLocationList';
import EmployeeAssetsList from '../map-detail-lists/EmployeeAssetsList';
import EmployeeFormsList from '../map-detail-lists/EmployeeFormsLinst';

const Container = styled.View`
    display:flex;
    width: 400;
    border-color: '#ddd';
    padding-left:20;
    padding-right:20;
    padding-top:20;
    padding-bottom:20;
`;
const UserTitle = styled.Text`
    margin-left: 12px;
    font-size:22px;

`;

const EmployeeLabel = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;   

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
}

const EmployeeDetails = (props: EmployeeDetailsProps) => {
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
    return (
        <Container>
            <MapDetailsFrame
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
                        {tabs.selected === EmployeeDetailsTabs.DISC && (
                            <>
                            <EmployeeDiscList
                                company={'Co-operative Limited'}
                                time={'8:05 AM'}
                                distance={'Clock-In is outside of GeoFence by 0.5 Miles'}
                                notes={'Notes'}
                                text ={'I clocked in at the shop this morning'}
                            />
                            <EmployeeDiscList
                                company={'10000 West ERD (K-Rite)'}
                                time={'5:35 PM0'}
                                distance={'Clock-OUT is outside of Geofence by 10.5 Miles'}    
                                notes={'Notes'}
                                text ={'I forgot to clock out at 5:00, sorry!'}
                            />
                            </>
                        )}
                        {tabs.selected === EmployeeDetailsTabs.HISTORY && (
                            <>
                            <EmployeeHistoryList
                                time={'8:05 AM'}
                                isClockedIn
                                coordinates={{lat: 53.215664 , long: -119.6657889 }}
                                accuracy={'High'}
                            />
                            <EmployeeHistoryList
                                time={'11:56 AM'}
                                isClockedIn={false}
                                coordinates={{lat: 63.135664 , long: -113.5657889 }}
                                accuracy={'High'}
                            />
                            <EmployeeHistoryList
                                time={'3:05 PM'}
                                isClockedIn={false}
                                coordinates={{lat: 43.235664 , long: -112.9657889 }}
                                accuracy={'High'}
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
                goToNext={() => console.log('Next')}
                goToPrev={() => console.log('Prev')}
                back={() => console.log('back')}
            />
        </Container>
    )
}
export default EmployeeDetails;