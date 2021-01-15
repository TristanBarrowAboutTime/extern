import * as React from 'react';
import styled from 'styled-components/native';

const FormList = styled.View`
`;

const Time = styled.View`
`;

type EmployeeFormsListProps = {
    formlist: React.ReactNode
    time: React.ReactNode
}

const EmployeeFormsList = (props: EmployeeFormsListProps) => {
    return (
        <div>
            <FormList>
                {props.formlist}
            </FormList>

            <Time>
                {props.time}
            </Time>
        </div>
    )
}

export default EmployeeFormsList;