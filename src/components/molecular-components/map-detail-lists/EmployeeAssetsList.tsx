import * as React from 'react';
import styled from 'styled-components/native';

const CardView = styled.View`
    width: auto;
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
    box-shadow: 0 1px 4px #cccccc;
`;

const Time = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
    padding-bottom: 8px;
    padding-left: 10px;
`;
const InTime = styled.View`
    color: #79A949;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 20px;
`;

const OutTime = styled.View`
    color: #9B3E38;
    display: flex;
    flex-direction: row;
`;

const AssetsName = styled.View`
    color: #79767F;
    display: flex;
    padding-left: 10px;
    padding-bottom: 10px;
    font-size: 15px;
    font-weight: 600;
`;

const CompanyDetails = styled.View`
    color: #79767F;
    display: flex;
    padding-left: 10px;
    padding-bottom: 10px;
    font-size: 15px;  

`;

const ServiceArea = styled.View`
    color: #79767F;
    display: flex;
    padding-left: 10px;
    padding-bottom: 10px;
    font-size: 15px;  
`;

export type EmployeeAssetsRecord = {
    inTime: string
    outTime: string
    assetsname: string
    company: string
    servicearea: string
}

type EmployeeAssetsListProps = {
    assetsRecord: EmployeeAssetsRecord[]
    filterValue: string
}

const EmployeeAssetsList = (props: EmployeeAssetsListProps) => {
    const value = props.filterValue.toLowerCase();
    return (
        <>
            {props.assetsRecord.map((item) =>{
                if (item.inTime.toLowerCase().includes(value) ||
                    item.outTime.toLowerCase().includes(value) ||
                    item.assetsname.toLowerCase().includes(value) ||
                    item.company.toLowerCase().includes(value) ||
                    item.servicearea.toLowerCase().includes(value)) 
                {
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
                            <AssetsName>
                                {item.assetsname}
                            </AssetsName>
                
                            <CompanyDetails>
                                {item.company}
                            </CompanyDetails>
                
                            <ServiceArea>
                                {item.servicearea}
                            </ServiceArea>
                        </CardView>
                    )
                }
            })}
        </>
    )
}

export default EmployeeAssetsList;