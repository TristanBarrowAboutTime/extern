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

export type EmployeeAssetsRecord = {
    inTime: React.ReactNode
    outTime: React.ReactNode
    assetsname: React.ReactNode
    company: React.ReactNode
    servicearea: React.ReactNode
}

type EmployeeAssetsListProps = {
    assetsRecord: EmployeeAssetsRecord[]

}

const EmployeeAssetsList = (props: EmployeeAssetsListProps) => {
    return(
        <>
        {props.assetsRecord.map((item) =>{
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
        })}
            </>
    )

    
}

export default EmployeeAssetsList;