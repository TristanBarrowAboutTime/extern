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
font-size:15px;
`;

const Employee = styled.Text`
color: #525252;
font-size:15px;

`;

const Time = styled.View`
color: #525252;
font-size:15px;

`;

type LocationFormProps = {
    formlist: string;
    employee: string;
    time: React.ReactNode;
}

const LocationForm = (props: LocationFormProps) => {
    return (
        <Container>
            <FormList>
                {props.formlist}
            </FormList>

            <Employee>
                {props.employee}
            </Employee>

            <Time>
                {props.time}
            </Time>
        </Container>
    )
}

export default LocationForm;
