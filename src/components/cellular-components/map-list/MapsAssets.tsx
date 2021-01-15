import * as React from 'react';
import { employeeListData } from '../../../mock-data/employeeMapData';
import SortableList from '../../frames/SortableList';
import styled from 'styled-components/native';
import MapEmployeeListTemplate, { ListEmployee } from '../../molecular-components/templates/EmployeeListTemplate';

const Container = styled.View`

`;

type MapAssetsProps = {
    searchValue: string
}

const MapsAssets = (props: MapAssetsProps) => {
    return (
        <Container>
            <SortableList
                data={[]}
                template={(employee: ListEmployee) => <MapEmployeeListTemplate employee={employee} />}
                sortables={{
                    code: { title: 'Code', sort: (a: ListEmployee, b: ListEmployee) => (a.code > b.code ? -1 : 1) },
                    firstName: { title: 'First Name', sort: (a: ListEmployee, b:ListEmployee) => (a.firstName > b.firstName ? -1 : 1) },
                    lastName: { title: 'Last Name', sort: (a: ListEmployee, b: ListEmployee) => (a.lastName > b.lastName ? -1 : 1) },
                    
                }}
                shouldDisplayItem={(item: ListEmployee) => item.address.includes(props.searchValue)}
            />
        </Container>
    );
};

export default MapsAssets;