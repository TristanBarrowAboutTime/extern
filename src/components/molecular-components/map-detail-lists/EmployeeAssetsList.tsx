import * as React from 'react';
import styled from 'styled-components/native';

const InTime = styled.View`
`;

const OutTime = styled.View`
`;

const AssetsName = styled.View`
`;

const CompanyDetails = styled.View`
`;

const ServiceArea = styled.View`
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
        <div>
                <InTime>
                    {props.inTime}
                </InTime>

                <OutTime>
                    {props.outTime}
                </OutTime>
            <AssetsName>
                {props.assetsname}
            </AssetsName>

            <CompanyDetails>
                {props.company}
            </CompanyDetails>

            <ServiceArea>
                {props.servicearea}
            </ServiceArea>
        </div>
    )
}

export default EmployeeAssetsList;