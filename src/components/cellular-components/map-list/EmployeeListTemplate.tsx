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

const SubTitle = styled.Text`

`;


export type ListEmployee = {
    code: number
    firstName: string
    lastName: string
    time: string
    geoDiscrepancy: boolean
    address: string 
    status: MapEmployeeStatus
    image: null | string
}

type EmployeeListTemplateProps = {
    employee: ListEmployee
}

const EmployeeListTemplate = ({ employee }: EmployeeListTemplateProps) => {
    const {
        code,
        firstName,
        lastName,
        time,
        geoDiscrepancy,
        address,
        status,
        image
    } = employee;

    return (
        <Container key={code}>
            <UserImage 
                src={image} 
                firstName={firstName}
                lastName={lastName}
                status={status}
            />
            <Content>
                <Row>                  
                    <Link to= "/employee-details">  
                    <Title>
                        {`${code} ${firstName} ${lastName}`}
                    </Title >
                    </Link>
                    <View>
                        {geoDiscrepancy && <FontAwesomeIcon icon={faGlobe} color={Styles.color.red} />}
                    </View>
                </Row>
                <Row>
                    <SubTitle>{address}</SubTitle>
                    <SubTitle>{time}</SubTitle>
                </Row>
            </Content>
            <FontAwesomeIcon icon={faChevronRight} color={'gray'} />
        </Container>
    )
}

export default EmployeeListTemplate;