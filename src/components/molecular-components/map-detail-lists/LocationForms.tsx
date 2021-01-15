import * as React from 'react';
import styled from 'styled-components/native';

const FormList = styled.View`
`;

const Employee = styled.Text`
`;

const Time = styled.View`
`;

type LocationFormProps = {
    formlist: string;
    employee: string;
    time: React.ReactNode;
}

const LocationForm = (props: LocationFormProps) => {
    return (
        <div>
            <FormList>
                {props.formlist}
            </FormList>

            <Employee>
                {props.employee}
            </Employee>
            <Time>
                {props.time}
            </Time>
        </div>
    )
}

export default LocationForm;