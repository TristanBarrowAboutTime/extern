import * as React from 'react';
import styled from 'styled-components/native';

const CardView = styled.View`
    width:auto;
    padding-left:10;
    padding-right:10;
    padding-top:10;
    padding-bottom:10;
    margin-top:10;
    border-radius: 4px;
    box-shadow: 0 1px 4px #cccccc;
    shadow-color: grey;
    shadow-opacity: 0.8;
`;

const Time = styled.View`
    display:flex;
    flex-direction:row;
    align-items: center;
    font-size:15px;
    font-weight:400;
    padding-bottom:8px;
    padding-left:10px;
      
`;

const InTime = styled.View`
    color:#79A949;
    display:flex;
    flex-direction:row;
    align-items: center;
    padding-right:20px;
`;

const OutTime = styled.View`
    color:#9B3E38;
    display:flex;
    flex-direction:row;

`;

const CompanyArea = styled.View`
    display:flex;
    font-weight:400;
    padding-left:10px;
    padding-bottom:8px;
`;

const ServiceArea = styled.View`
    display:flex;
    font-weight:400;
    padding-left:10px;
    padding-bottom:8px;
`;

type EmployeeLocationListProps = {
    inTime: React.ReactNode
    outTime: React.ReactNode
    companyArea: React.ReactNode
    serviceArea: React.ReactNode
}


const EmployeeLocationList = (props: EmployeeLocationListProps) => {
    return (

        <CardView>
            <Time>
                <InTime>
                    {props.inTime}
                </InTime>

                <OutTime>
                    {props.outTime}
                </OutTime>
            </Time>
            <CompanyArea>
                {props.companyArea}
            </CompanyArea>

            <ServiceArea>
                {props.serviceArea}
            </ServiceArea>
        </CardView>

    )
}

export default EmployeeLocationList;