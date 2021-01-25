import * as React from 'react';
import { View } from 'react-native';
import UserImage, { MapEmployeeStatus } from '../../atomic-components/UserImage';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Styles from '../../../style/Styles';

const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 360px;
    padding: 4px;
    padding-left: 20px;
    :hover {
        background-color: lightgray;
    }

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
    margin-left: 8px;
    margin-right: 8px;
`;

const Title = styled.Text`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
                    shouldShowStatus={true}
                    size={36}
                />
                <Content>
                    <Row>                  
                        <Title>
                            {`${code} ${firstName} ${lastName}`}
                        </Title >
                        <View>
                            {geoDiscrepancy && <FontAwesomeIcon icon={faGlobe} color={Styles.color.red} size={'lg'} />}
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