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

const Title = styled.View`
display:flex;
flex-direction: row;
justify-content:space-between;
font-weight:400;
padding:10px;
`;
const Time = styled.View`
color: #525252;
font-size:15px;

`;

export type LocationFormsRecord = {
    formlist: string;
    employee: string;
    time: string;
}
type LocationFormProps = {
    locationFormsRecord: LocationFormsRecord[]
    filterValue: string
}

const LocationForm = (props: LocationFormProps) => {
    const value = props.filterValue.toLowerCase();
    return (
        <>
                   <Title>
                <div>
                    Form Name
                </div>
                <div>
                    Employee
                </div>
                <div>
                    Synced Time
                </div>

            </Title>
        {props.locationFormsRecord.map((item)  => {
            if(item.formlist.toLowerCase().includes(value) ||
            item.employee.toLowerCase().includes(value) ||
            item.time.toLowerCase().includes(value)){
                return (
                    <Container>
                        <FormList>
                            {item.formlist}
                        </FormList>
            
                        <Employee>
                            {item.employee}
                        </Employee>
            
                        <Time>
                            {item.time}
                        </Time>
                    </Container>
                )
            }
                
        })}
        </>
    )

}

export default LocationForm;
