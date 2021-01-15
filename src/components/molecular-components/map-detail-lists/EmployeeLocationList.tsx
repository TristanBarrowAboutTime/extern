import * as React from 'react';
import styled from 'styled-components/native';


const Container = styled.View`
`;

const InTime = styled.View`
`;

const OutTime = styled.View`
`;

const CompanyArea = styled.View`
`;

const ServiceArea = styled.View`
`;

type EmployeeLocationListProps = {
    inTime: React.ReactNode
    outTime: React.ReactNode
    companyArea: React.ReactNode
    serviceArea: React.ReactNode
}


const EmployeeLocationList = (props: EmployeeLocationListProps) => {
    return (
        <div>
            <Container>
                <InTime>
                    {props.inTime}
                </InTime>

                <OutTime>
                    {props.outTime}
                </OutTime>

                <CompanyArea>
                    {props.companyArea}
                </CompanyArea>

                <ServiceArea>
                    {props.serviceArea}
                </ServiceArea>
            </Container>
        </div>
    )
}

export default EmployeeLocationList;