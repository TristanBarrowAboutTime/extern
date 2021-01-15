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
                            firstName={'Roshni'}
                            lastName={'Raval'}
                            size={60}
                            status={MapEmployeeStatus.CLOCKED_IN}
                        />
                        <UserTitle>
                            Roshni
                      </UserTitle>
                    </EmployeeLabel>
                }
                tabs={<Tabs {...tabs.tabsBinding} />}
                list={
                    <>
                        {tabs.selected === EmployeeDetailsTabs.DISC && (
                            <EmployeeDiscList
                                company={'company'}
                                time={'time'}
                                distance={'distance'}
                                notes={'notes'}
                            />
                        )}
                        {tabs.selected === EmployeeDetailsTabs.HISTORY && (
                            <EmployeeHistoryList
                                time={'time'}
                                coordinates={'coordinates'}
                                accuracy={'accuracy'}
                            />
                            )}
                        {tabs.selected === EmployeeDetailsTabs.LOCATION && (
                            <EmployeeLocationList
                                inTime={'in-time'}
                                outTime={'out-time'}
                                serviceArea={'service area'}
                                companyArea={'company-area'}
                            />
                        )}
                        {tabs.selected === EmployeeDetailsTabs.ASSETS && (
                            <EmployeeAssetsList
                                inTime={'in-time'}
                                outTime={'out-time'}
                                servicearea={'service area'}
                                assetsname={'assets name'}
                                company={'comapny name'}
                            />
                        )}
                        {tabs.selected === EmployeeDetailsTabs.FORMS && (
                            <EmployeeFormsList
                                formlist={'form list'}
                                time={'time'}
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