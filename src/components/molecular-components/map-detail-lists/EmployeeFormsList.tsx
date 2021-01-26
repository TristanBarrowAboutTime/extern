import * as React from 'react';
import styled from 'styled-components/native';


const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
`;

const Title = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 400;
    padding: 10px;
`;

const FormList = styled.View`
    color: #79A949;
`;

const Time = styled.View`
`;

export type EmployeeFormsRecord = {
    formlist: string
    time: string
}


type EmployeeFormsListProps = {
    formRecord: EmployeeFormsRecord[]
    filterValue: string
}

const EmployeeFormsList = (props: EmployeeFormsListProps) => {
    const value = props.filterValue.toLowerCase();
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
            {props.formRecord.map((item) => {
                if (item.formlist.toLowerCase().includes(value) ||
                    item.time.toLowerCase().includes(value)) 
                {
                    return (
                        <Container>
                            <FormList>
                                {item.formlist}
                            </FormList>
    
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

export default EmployeeFormsList;