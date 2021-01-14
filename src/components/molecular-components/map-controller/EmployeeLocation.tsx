import * as React from 'react'; 
import { Text } from 'react-native';
import styled from 'styled-components/native';
import SortableList from '../SortableList';
import { employeeLocationData } from '../../../mock-data/locationMapData';
import EmployeeLocationTemplate from '../../cellular-components/map-list/EmployeeLocationTemplate';
import { EmployeeLocationType } from '../../../types/EmployeeLocationType';

const ContainerView = styled.View`
    display: flex;
    width: 400;
    border-color: '#ddd';
    padding-left: 20;
    padding-right: 20;
    padding-top: 20;
    padding-bottom: 20;
`;

type EmployeeLocationProps = {
    searchValue: string 
}

const EmployeeLocation = (props: EmployeeLocationProps) => {

    return (
        <ContainerView>
            <SortableList
                data={employeeLocationData}
                template={(employee: EmployeeLocationType) => <EmployeeLocationTemplate employee={employee} />}
                postHeader={<Text>Active job: 4</Text>}
                sortables={{
                    code: { title: 'Code', sort: (a: EmployeeLocationType, b: EmployeeLocationType) => (a.code > b.code ? -1 : 1) },
                    name: { title: ' Name', sort: (a: EmployeeLocationType, b:EmployeeLocationType) => (a.name > b.name ? -1 : 1) },
                }}
                shouldDisplayItem={(item: EmployeeLocationType) => item.name.includes(props.searchValue)}
            />
        </ContainerView>
    )
}
export default EmployeeLocation;