import * as React from 'react';
import UserImage from '../../atomic-components/UserImage';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';


const Container = styled.View`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 360px;

`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;

`;

const Content = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 8px;
    margin-right: 8px;
`;

const Title = styled.View`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex: 1;
   
`;
const Text = styled.Text`
    font-size: 20px;

`;
const SubTitle = styled.Text`
    
`;

export type AssetsListRecord = {
    assetsCode: string
    assetsFirstName: string
    assetsLastName: string
    employeeCode: number
    employeeFirstName: string
    employeeLastName: string
    location: string
    image: null | string
}

type AssetListTemplateProps = {
    assets: AssetsListRecord
    showNoActivity:boolean
}

const AssetListTemplate = ({ assets,showNoActivity }: AssetListTemplateProps) => {
    const {
        assetsCode,
        assetsFirstName,
        assetsLastName,
        employeeCode,
        employeeFirstName,
        employeeLastName,
        location,
        image
    } = assets;

    return (
        <Container key={assetsCode}>
            <UserImage
                src={image}
                firstName={assetsFirstName}
                lastName={assetsLastName}
                size={40}
            />
            <Content>
                <Row>
                    <Title>
                        <Text>{`${assetsCode} ${assetsFirstName} ${assetsLastName}`} </Text>
                    </Title >
                    <FontAwesomeIcon icon={faChevronRight} color={'gray'} />

                </Row>                
                        <Row>
                                                     
                            <SubTitle>{location}</SubTitle>                           
                            :
                            <Row>
                                <SubTitle>No Location</SubTitle>
                            </Row>                          
                          
                        </Row> 
                        
                        {showNoActivity?                                              
                        <Row>
                            <SubTitle>{`${employeeCode} ${employeeFirstName} ${employeeLastName}`}</SubTitle>
                            <FontAwesomeIcon icon={faUser} color={'gray'} />
                        </Row>                  
                    :
                    <Row>
                        <SubTitle>No Activity</SubTitle>
                    </Row>
                }
            </Content>
        </Container>
    )
}

export default AssetListTemplate;