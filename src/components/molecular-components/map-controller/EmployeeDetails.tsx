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
const CardView = styled.View`
    padding-left:10;
    padding-right:10;
    padding-top:10;
    padding-bottom:10;
    margin-top:10;
    border-width: 1;
    border-radius: 2;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-offset: {width: 0; height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 1;
`;

const TextView = styled.View`
    flex-direction:row;
    justify-content: space-between;
`;

const EmployeeLabel = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;   

`;

export enum EmployeeDetailTabs {
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
            EmployeeDetailTabs.DISC,
            EmployeeDetailTabs.HISTORY,
            EmployeeDetailTabs.LOCATION,
            EmployeeDetailTabs.ASSETS,
            EmployeeDetailTabs.FORMS
        ],
        selected: EmployeeDetailTabs.DISC
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
                        {tabs.selected === EmployeeDetailTabs.DISC && (
                            <EmployeeDiscList
                                company={'company'}
                                time={'time'}
                                distance={'distance'}
                                notes={'notes'}
                            />
                        )}
                        {tabs.selected === EmployeeDetailTabs.HISTORY && (
                            <EmployeeHistoryList
                                time={'time'}
                                coordinates={'coordinates'}
                                accuracy={'accuracy'}
                            />
                            )}
                        {tabs.selected === EmployeeDetailTabs.LOCATION && (
                            <EmployeeLocationList
                                inTime={'in-time'}
                                outTime={'out-time'}
                                serviceArea={'service area'}
                                companyArea={'company-area'}
                            />
                        )}
                        {tabs.selected === EmployeeDetailTabs.ASSETS && (
                            <EmployeeAssetsList
                                inTime={'in-time'}
                                outTime={'out-time'}
                                servicearea={'service area'}
                                assetsname={'assets name'}
                                company={'comapny name'}
                            />
                        )}
                        {tabs.selected === EmployeeDetailTabs.FORMS && (
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