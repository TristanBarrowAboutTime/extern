import * as React from 'react';
import { View, Text } from 'react-native';
import { employeeGeoJson } from '../../../mock-data/employeeMapData';
import UserImage, { MapEmployeeStatus } from './UserImage';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Styles from '../../../style/Styles';
import { Link } from 'react-router-dom';

const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 360;

`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

`;

const Content = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 8;
    margin-right: 8;
`;

const Title = styled.Text`
    font-size: 20px;
`;


export type LocationType = {
    code: number
    name: string
    site: string
}

type ListTemplateProps = {
    employee: LocationType
}

const LocationTemplate = ({ employee }: ListTemplateProps) => {
    const {
        code,
        name,
        site,
    
    
    } = employee;

    return (
        <Container key={code}>
 
            <Content>
                <Row>                  
                    <Link to= "/location-employee-details">  
                    <Title>
                        {`${code} ${name} ${site}`}
                    </Title >
                    </Link>                
                </Row>
         
            </Content>
            <FontAwesomeIcon icon={faChevronRight} color={'gray'} />
        </Container>
    )
}

export default LocationTemplate;