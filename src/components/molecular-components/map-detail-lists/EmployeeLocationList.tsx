import * as React from 'react';
import styled from 'styled-components/native';

const CardView = styled.View`
    width:auto;
    padding: 10px;
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

export type EmployeeLocationRecord = {
    inTime: string
    outTime: string
    companyArea: string
    serviceArea: string
}

type EmployeeLocationListProps = {
    locationRecord: EmployeeLocationRecord[]
    filterValue: string
}


const EmployeeLocationList = (props: EmployeeLocationListProps) => {
    const value = props.filterValue.toLowerCase();

    return(
        <>
        {props.locationRecord.map((item) => {
            if(item.inTime.toString().toLowerCase().includes(value) ||
            item.outTime.toString().toLowerCase().includes(value) ||
            item.serviceArea.toString().toLowerCase().includes(value) || 
            item.companyArea.toString().toLowerCase().includes(value)) {

             return (

                <CardView>
                    <Time>
                        <InTime>
                            {item.inTime}
                        </InTime>
        
                        <OutTime>
                            {item.outTime}
                        </OutTime>
                    </Time>
                    <CompanyArea>
                        {item.companyArea}
                    </CompanyArea>
        
                    <ServiceArea>
                        {item.serviceArea}
                    </ServiceArea>
                </CardView>
        
            )
             }
        })}
        
        </>
    )
   
}

export default EmployeeLocationList;