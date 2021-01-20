import * as React from 'react';
import styled from 'styled-components/native';


const Container = styled.View`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    padding-bottom:10px;
`;

const FormList = styled.View`
color: #79A949;

`;

const Time = styled.View`
`;

type EmployeeFormsListProps = {
    formlist: React.ReactNode
    time: React.ReactNode
}

const EmployeeFormsList = (props: EmployeeFormsListProps) => {
    return (
        <Container>
            <FormList>
                {props.formlist}
            </FormList>

            <Time>
                {props.time}
            </Time>
        </Container>
    )
}

export default EmployeeFormsList;