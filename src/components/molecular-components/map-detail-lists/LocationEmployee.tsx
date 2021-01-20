import * as React from 'react';
import styled from 'styled-components/native';
import { locationEmployeeListData } from '../../../mock-data/employeeMapData';
import LocationEmployeeListTemplate ,{ EmployeeList }from '../../molecular-components/templates/LocationEmployeeListTemplate'
import SortableList from '../../frames/SortableList';

const Container = styled.View`
    display:flex;
    width: 400;
    border-color: '#ddd';
    padding-left:20;
    padding-right:20;
    padding-top:20;
    padding-bottom:20;
`;

const Employee = styled.View`
`;

const Site = styled.View`
`;

type LocationEmployeeProps = {
    image: React.ReactNode
    employee: React.ReactNode
    site: React.ReactNode
}

const LocationEmployee = (props: LocationEmployeeProps) => {
    return (
        <Container>
            <Employee>
                {props.employee}
            </Employee>

            <Site>
                {props.site}
            </Site>

        </Container>
    )
}

export default LocationEmployee;