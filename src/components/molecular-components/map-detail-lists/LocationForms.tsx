import * as React from 'react';
import styled from 'styled-components/native';
import { useLocationFormData } from '../../../hooks/loadable-data/live-maps/controller/locations/useLocationFormData';


const STRINGS = {
    FORM_NAME: 'Form Name',
    EMPLOYEE: 'Employee',
    SYNCED_TIME: 'Synced Time',
}

type CompTheme = {
    colors: {
        active: string
        text: string
    }
}

const DEFAULT_THEME = {
    theme: {
        colors: {
            active: 'green',
            text: 'gray'
        }
    }
}

const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    
`;

const FormList = styled.View`
    color: #79A949;
    font-size: 15px;
`;

const Employee = styled.Text`
    color: #525252;
    font-size: 15px;

`;

const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 400;
    padding: 10px;
`;

const ColumnHeader = styled.Text`

`;

const Time = styled.View`
    color: ${(props: { theme: CompTheme }) => props};
    font-size: 15px;

`;

type LocationFormProps = {
    filterValue: string
}

const LocationForm = (props: LocationFormProps) => {
    const value = props.filterValue.toLowerCase();
    const locationFormRecords = useLocationFormData();

    return (
        <>
            <Header>
                <ColumnHeader>{STRINGS.FORM_NAME}</ColumnHeader>
                <ColumnHeader>{STRINGS.EMPLOYEE}</ColumnHeader>
                <ColumnHeader>{STRINGS.SYNCED_TIME}</ColumnHeader>
            </Header>
            {locationFormRecords.map((locationFormRecord)  => {
                const { 
                    formList,
                    employee,
                    time
                } = locationFormRecord;

                const shouldDisplayItem: boolean = (
                    formList.toLowerCase().includes(value) ||
                    employee.toLowerCase().includes(value) ||
                    time.toLowerCase().includes(value)
                );

                if (shouldDisplayItem) {
                    return (
                        <Row>
                            <FormList>{formList}</FormList>
                            <Employee>{employee}</Employee>
                            <Time>{time}</Time>
                        </Row>
                    )
                }
                    
            })}
        </>
    )

}

export default LocationForm;
