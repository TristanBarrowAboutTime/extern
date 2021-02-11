import * as React from 'react';
import styled from 'styled-components/native';
import { useEmployeeFormData, EmployeeFormRecord } from '../../../hooks/loadable-data/live-maps/controller/employees/useEmployeeFormData';

const STRINGS = {
    FORM_NAME: 'Form Name',
    SYNCED_TIME: 'Synced Time',
}

type CompTheme = {
    colors: {
        active: string
        error: string
        text: string
    }
    fontSizes: {
        normal: number
    }
}

const DEFAULT_THEME = {
    theme: {
        colors: {
            active: 'green',
            error: 'red',
            text: 'black',
        },
        fontSizes: {
            normal: 15
        },
        
    } as CompTheme
}

const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
`;

const FormHeader = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 400;
    padding: 10px;
`;

const ColumnHeader = styled.Text`

`;

const FormName = styled.Text`
    // change to active color when link is put in.  
    color: ${(props: { theme: CompTheme }) => props.theme.colors.text}; 
`;

const Time = styled.Text``;

export type EmployeeFormsRecord = {
    formName: string
    time: string
}


type EmployeeFormsListProps = {
    filterValue: string
}

const EmployeeFormsList = (props: EmployeeFormsListProps) => {
    const value = props.filterValue.toLowerCase();
    const employeeFromRecords = useEmployeeFormData();

    return (
        <>
            <FormHeader>
                <ColumnHeader>{STRINGS.FORM_NAME} </ColumnHeader>
                <ColumnHeader>{STRINGS.SYNCED_TIME}</ColumnHeader>
            </FormHeader>
            {employeeFromRecords.map((employeeFormRecord: EmployeeFormRecord) => {
                const { formName, time } = employeeFormRecord;
                const shouldDisplayItem: boolean = (
                    formName.toLowerCase().includes(value) ||
                    time.toLowerCase().includes(value)
                );

                if (shouldDisplayItem) {
                    return (
                        <Row>
                            <FormName>{formName}</FormName>
                            <Time>{time}</Time>
                        </Row>
                    )
                }
            })}
        </>
    )

}

export default EmployeeFormsList;