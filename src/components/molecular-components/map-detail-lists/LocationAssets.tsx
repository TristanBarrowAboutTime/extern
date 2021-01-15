import * as React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    display:flex;
    width: 400;
    border-color: '#ddd';
    padding-left:20;
    padding-right:20;
    padding-top:20;
    padding-bottom:20;
`;


const AssetsName = styled.View`
`;

const Employee = styled.View`
`;

const ServiceType = styled.View`
`;

const Time = styled.View`
`;

const Activity = styled.View``;

type LocationAssetsProps = {
    assets: React.ReactNode
    employee: React.ReactNode
    service: React.ReactNode
    time: React.ReactNode
    activity: React.ReactNode
}

const LocationAssets = (props: LocationAssetsProps) => {
    return (
        <div>
            <Container>
                <AssetsName>
                    {props.assets}
                </AssetsName>
                <Employee>
                    {props.employee}
                </Employee>
                <ServiceType>
                    {props.service}
                </ServiceType>
                <Time>
                    {props.time}
                </Time>
                <Activity>
                    {props.activity}
                </Activity>
            </Container>
        </div>
    )
}

export default LocationAssets;