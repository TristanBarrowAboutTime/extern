import * as React from 'react';
import styled from 'styled-components/native';


const Container = styled.View`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    padding-bottom:10px;
`;
const Title = styled.View`
display:flex;
flex-direction: row;
justify-content:space-between;
font-weight:400;
padding:10px;
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
        <>
        <Title>
            <div>
                Form Name
            </div>
            <div>
                 Synced Time
            </div>

        </Title>
        <Container>
            <FormList>
                {props.formlist}
            </FormList>

            <Time>
                {props.time}
            </Time>
        </Container>
        </>
    )
}

export default EmployeeFormsList;