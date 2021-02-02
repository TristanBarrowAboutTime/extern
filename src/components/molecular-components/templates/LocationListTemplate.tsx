import * as React from 'react';
import { MapListLocation } from '../../../types/MapListLocation';
import styled from 'styled-components/native';
import LocationIcon from '../../atomic-components/LocationIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 360;
    padding-top: 10px ;
    padding-bottom: 10px ;
`;

const Content = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 8;
    margin-right: 8;
`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

const MarkerIcon = styled.View`

`;
const Title = styled.Text`
    font-size: 20px;
`;

const SubTitle = styled.Text`
    color: #525252;
`;



type LocationListTemplateProps = {
    location: MapListLocation 
}

const LocationListTemplate = ({ location }: LocationListTemplateProps) => {
    const { locationCode, locationFirstName, locationLastName, jobAddress } = location;

    return (
        <Container>
            <LocationIcon 
                first ={locationFirstName}
                last = {locationLastName}
                size={40} 
                color= {'#9B3E38'}
            />
            <Content>
                <Row>
                <Title>{`${locationCode} ${locationFirstName} ${locationLastName}`}</Title>
                </Row>
                <SubTitle>{jobAddress}</SubTitle>
               
            </Content>
            <FontAwesomeIcon icon={faChevronRight} color={'gray'} />
        </Container>
    );
}

export default LocationListTemplate;