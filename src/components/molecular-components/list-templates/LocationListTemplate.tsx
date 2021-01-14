import * as React from 'react';
import { MapListLocation } from '../../../types/MapListLocation';
import styled from 'styled-components/native';

const Container = styled.View`

`;

const Content = styled.View`

`;
const MarkerIcon = styled.View`

`;
const Title = styled.Text`

`;

const SubTitle = styled.Text`

`;

type LocationListTemplateProps = {
    location: MapListLocation 
}

const LocationListTemplate = ({ location }: LocationListTemplateProps) => {
    const { code, name, address } = location;

    return (
        <Container>
            <MarkerIcon />
            <Content>
                <Title>{`${code} ${name}`}</Title>
                <SubTitle>{address}</SubTitle>
            </Content>
        </Container>
    );
}

export default LocationListTemplate;