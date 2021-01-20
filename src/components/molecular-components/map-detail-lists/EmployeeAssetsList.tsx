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
    display: flex;
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

const AssetsName = styled.View`
    color:#79767F;
    display:flex;
    padding-left:10px;
    padding-bottom:10px;
    font-size:15px;
    font-weight:600;
`;

const CompanyDetails = styled.View`
    color: #79767F;
    display:flex;
    padding-left:10px;
    padding-bottom:10px;
    font-size:15px;  

`;

const ServiceArea = styled.View`
    color: #79767F;
    display:flex;
    padding-left:10px;
    padding-bottom:10px;
    font-size:15px;  
`;

type EmployeeAssetsListProps = {
    inTime: React.ReactNode
    outTime: React.ReactNode
    assetsname: React.ReactNode
    company: React.ReactNode
    servicearea: React.ReactNode

}

const EmployeeAssetsList = (props: EmployeeAssetsListProps) => {
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
            <AssetsName>
                {props.assetsname}
            </AssetsName>

            <CompanyDetails>
                {props.company}
            </CompanyDetails>

            <ServiceArea>
                {props.servicearea}
            </ServiceArea>
        </CardView>
    )
}

export default EmployeeAssetsList;