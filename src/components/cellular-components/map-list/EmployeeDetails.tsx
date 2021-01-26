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
import { assetsData, data, discData, formData, locationData } from '../../../mock-data/map-details/employeeListData';

const Container = styled.View`
    display:flex;
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
                            {/* Open link into the Time editor */}
                            <FontAwesomeIcon icon={faExternalLinkAlt} color={'gray'} />

                        </Link>
                        {tabs.selected === EmployeeDetailsTabs.DISC && (
                            <>
                                <EmployeeDiscList
                                    discRecords={discData}
                                    filterValue={props.filterValue}
                                />
                            </>
                        )}
                        {tabs.selected === EmployeeDetailsTabs.HISTORY && (
                            <>
                                <EmployeeHistoryList
                                    timeRecords={data}
                                    filterValue={props.filterValue}
                                />
                            </>
                        )}
                        {tabs.selected === EmployeeDetailsTabs.LOCATION && (
                            <EmployeeLocationList
                                locationRecord={locationData}
                                filterValue={props.filterValue}
                            />
                        )}
                        {tabs.selected === EmployeeDetailsTabs.ASSETS && (
                            <EmployeeAssetsList
                                assetsRecord={assetsData}
                                filterValue={props.filterValue}
                            />
                        )}
                        {tabs.selected === EmployeeDetailsTabs.FORMS && (
                            <EmployeeFormsList
                                formRecord={formData}
                                filterValue={props.filterValue}
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