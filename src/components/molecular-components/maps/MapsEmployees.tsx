import * as React from 'react';
import { employeeListData } from '../../../mock-data/employeeMapData';
import SortableList from '../SortableList';
import styled from 'styled-components/native';
import MapEmployeeListTemplate, { ListEmployee } from '../../cellular-components/map-list/EmployeeListTemplate';
import EmployeeDetails from '../../../pages/EmployeeDetails';


const Container = styled.View`

`;

type MapsEmployeesProps = {
    searchValue: string
}

const MapsEmployees = (props: MapsEmployeesProps) => {
    return (
        <Container>
            <SortableList
                data={employeeListData}
                template={(employee: ListEmployee) => <MapEmployeeListTemplate employee={employee} />}
                sortables={{
                    code: { title: 'Code', sort: (a: ListEmployee, b: ListEmployee) => (a.code > b.code ? -1 : 1) },
                    firstName: { title: 'First Name', sort: (a: ListEmployee, b:ListEmployee) => (a.firstName > b.firstName ? -1 : 1) },
                    lastName: { title: 'Last Name', sort: (a: ListEmployee, b: ListEmployee) => (a.lastName > b.lastName ? -1 : 1) },
                    // time:{title: 'Code', sort: (a: LP, b:LP) => (a.code > b.code ? -1 : 1)},
                    // geoDiscrepancy: {title: 'Code', sort: (a: LP, b:LP) => (a.code > b.code ? -1 : 1)},
                    // address: {title: 'Code', sort: (a: LP, b:LP) => (a.code > b.code ? -1 : 1)}
                }}
                shouldDisplayItem={(item: ListEmployee) => item.address.includes(props.searchValue)}
            />
        </Container>
    );
};

export default MapsEmployees;