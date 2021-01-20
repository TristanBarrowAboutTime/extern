import * as React from 'react';
import { View } from 'react-native';
import UserImage, { MapEmployeeStatus } from '../../atomic-components/UserImage';
import styled from 'styled-components/native';
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
    address: string 
    image: null | string
}

type AssetListTemplateProps = {
    assets: ListEmployee
}

const AssetListTemplate = ({ assets }: AssetListTemplateProps) => {
    const {
        code,
        firstName,
        lastName,
        address,
        image
    } = assets;

    return (
        <Container key={code}>
            <UserImage 
                src={image} 
                firstName={firstName}
                lastName={lastName}
             />
            <Content>
                <Row>                  
                    {/* <Link to= "/assets-details">   */}
                    <Title>
                        {`${code} ${firstName} ${lastName}`}
                    </Title >
                    {/* </Link> */}
                </Row>
                <Row>
                    <SubTitle>{address}</SubTitle>
                </Row>
            </Content>
            </Container>
    )
}

export default AssetListTemplate;