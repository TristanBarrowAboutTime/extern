import * as React from 'react';
import { View, Text } from 'react-native';
import { employeeListData } from '../../../mock-data/employeeMapData';
import SortableList from '../../frames/SortableList';
import styled from 'styled-components/native';
import MapEmployeeListTemplate, { ListEmployee } from '../../molecular-components/templates/EmployeeListTemplate';
import EmployeeDetails from './EmployeeDetails';
import { TouchableOpacity } from 'react-native';
import { MapControllerActions } from '../../../pages/MapsPage';


const Container = styled.View`

`;

type ColorStyle = {
    isActive: boolean
    theme: {
        colors: {
            active: string
            error: string
        }
    }
}

const ColoredDot = styled.View`
    height: 7px;
    width: 7px;
    border-radius: 3.5px; 
    background-color: ${(props: ColorStyle) => props.isActive ? props.theme.colors.active : props.theme.colors.error};
    margin-right: 4px; 
    margin-left: 18px;

`;
const ActiveEmployees = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

ColoredDot.defaultProps = {
    theme: {
        colors: {
            active: 'green', 
            error: 'red' 
        }
    }
}

type MapsEmployeesProps = {
    searchValue: string,
    isShowingDetails: boolean
    tabs: {
        tabsBinding: any,
        selected: string
    }
    activeEmployees: number
    inactiveEmployees: number
    actions: MapControllerActions // tunneling
}

const MapsEmployees = (props: MapsEmployeesProps) => {
    return (
        <Container>
            {props.isShowingDetails ? (
                <EmployeeDetails 
                    searchValue={props.searchValue}
                    tabs={props.tabs}
                    actions={props.actions}
                 />
            ) : (
                <SortableList
                    data={employeeListData}
                    spacingArray={[56,0,0,0,45]}
                    postHeader={
                        <ActiveEmployees>
                            <ColoredDot isActive={true} />
                            <Text>{props.activeEmployees}</Text>
                            <ColoredDot isActive={false} />
                            <Text>{props.inactiveEmployees}</Text>
                        </ActiveEmployees>
                    }
                    template={(employee: ListEmployee) => 
                        <TouchableOpacity onPress={props.actions.goToDetails}>
                            <MapEmployeeListTemplate employee={employee} />
                        </TouchableOpacity>
                    }
                    sortables={{
                        code: { title: 'Code', sort: (a: ListEmployee, b: ListEmployee) => (a.code > b.code ? -1 : 1) },
                        firstName: { title: 'First', sort: (a: ListEmployee, b:ListEmployee) => (a.firstName > b.firstName ? -1 : 1) },
                        lastName: { title: 'Last', sort: (a: ListEmployee, b: ListEmployee) => (a.lastName > b.lastName ? -1 : 1) },
                        // time:{title: 'Code', sort: (a: LP, b:LP) => (a.code > b.code ? -1 : 1)},
                        // geoDiscrepancy: {title: 'Code', sort: (a: LP, b:LP) => (a.code > b.code ? -1 : 1)},
                        // address: {title: 'Code', sort: (a: LP, b:LP) => (a.code > b.code ? -1 : 1)}
                    }}
                    shouldDisplayItem={(item: ListEmployee) => item.address.includes(props.searchValue)}
                />
            )}
            
        </Container>
    );
};

export default MapsEmployees;