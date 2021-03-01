import * as React from 'react';
import { View } from 'react-native';
import UserImage, { MapEmployeeStatus } from '../../atomic-components/UserImage';
import styled from 'styled-components/native';

const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 360;
    padding-top: 10px ;
    padding-bottom: 10px ;

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

type TimeStyle = {
    isClockedIn: boolean
}

const SiteStatus =styled.View`
     color: ${(props: TimeStyle) => props.isClockedIn ? '#79A949' : '#9B3E38'};
     display: flex;
     flex-direction: row;
     align-items:baseline;
`;

const SubTitle = styled.Text`
   color: #525252;

`;


export type EmployeeList = {
    code: number
    firstName: string
    lastName: string
    time: string
    address: string
    status: MapEmployeeStatus
    image: null | string
}

type EmployeeListTemplateProps = {
    employee: EmployeeList
}

const LocationEmployeeListTemplate = ({ employee}: EmployeeListTemplateProps) => {
    const {
        code,
        firstName,
        lastName,
        time,
        address,
        status,
        image
    } = employee;

    return (
        <Container key={code}>
            <UserImage
                src={null}
                firstName={firstName}
                lastName={lastName}
                status={status}
            />
            <Content>
                <Row>
                    {/* <Link to= "/location-details">   */}
                    <Title>
                        {`${code} ${firstName} ${lastName}`}
                    </Title >
                    <SiteStatus isClockedIn={true}>
                    {status === MapEmployeeStatus.CLOCKED_IN &&
                     'Onsite'}
                    </SiteStatus>
                </Row>
                <Row>
                <SiteStatus isClockedIn={false}>
                    {status !== MapEmployeeStatus.CLOCKED_IN &&
                        `${'offsite'}`}
                        <SubTitle>{address}</SubTitle>
                 </SiteStatus> 
                    {status !== MapEmployeeStatus.CLOCKED_IN &&
                        <SiteStatus isClockedIn={false}>{time}</SiteStatus>}  
                               
                </Row>
            </Content>
        </Container>
    )
}

export default LocationEmployeeListTemplate;