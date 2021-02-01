import * as React from 'react';
import styled from 'styled-components/native';
import MapDetailsFrame from '../../frames/MapDetailsFrame';
import UserImage, { MapEmployeeStatus } from '../../atomic-components/UserImage';
import Tabs, { useWithTabs } from '../../molecular-components/Tabs';
import EmployeeDiscList from '../../molecular-components/map-detail-lists/EmployeeDiscList';
import EmployeeHistoryList from '../../molecular-components/map-detail-lists/EmployeeHistoryList';
import EmployeeLocationList from '../../molecular-components/map-detail-lists/EmployeeLocationList';
import EmployeeAssetsList from '../../molecular-components/map-detail-lists/EmployeeAssetsList';
import EmployeeFormsList from '../../molecular-components/map-detail-lists/EmployeeFormsList';
import { assetsData, data, discData, formData, locationData } from '../../../mock-data/map-details/employeeListData';
import { MapControllerActions } from '../../../pages/MapsPage';

const Container = styled.View`
    display: flex;
    width: 400px;
    border-color: '#ddd';
    padding: 20px;
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
    employee: {
        code: string
        firstName: string
        lastName: string
        status: MapEmployeeStatus
        userImage: string | null
    }
    actions: MapControllerActions
}

const EmployeeDetails = (props: EmployeeDetailsProps) => {
    const { tabs, actions, searchValue, employee } = props;
    return (
        <Container>
            <MapDetailsFrame
                actions={actions}
                subjectContainer={
                    <EmployeeLabel>
                        <UserImage
                            firstName={employee.firstName}
                            lastName={employee.lastName}
                            status={employee.status}
                            src={employee.userImage}
                            size={60}
                        />
                        <UserTitle>
                            {`${employee.code} ${employee.firstName} ${employee.lastName}`}
                        </UserTitle>
                    </EmployeeLabel>
                }
                tabs={<Tabs {...tabs.tabsBinding} />}
                list={
                    <>
                        {tabs.selected === EmployeeDetailsTabs.DISC && (
                            <EmployeeDiscList
                                discRecords={discData}
                                filterValue={searchValue}
                            />
                        )}
                        {tabs.selected === EmployeeDetailsTabs.HISTORY && (
                            <EmployeeHistoryList
                                timeRecords={data}
                                filterValue={searchValue}
                            />
                        )}
                        {tabs.selected === EmployeeDetailsTabs.LOCATION && (
                            <EmployeeLocationList
                                locationRecord={locationData}
                                filterValue={searchValue}
                            />
                        )}
                        {tabs.selected === EmployeeDetailsTabs.ASSETS && (
                            <EmployeeAssetsList
                                assetsRecord={assetsData}
                                filterValue={searchValue}
                            />
                        )}
                        {tabs.selected === EmployeeDetailsTabs.FORMS && (
                            <EmployeeFormsList
                                formRecord={formData}
                                filterValue={searchValue}
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
    });

    return tabs; // employee tabs
}



export default EmployeeDetails;