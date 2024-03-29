import * as React from 'react';
import {  Image } from 'react-native';
import styled from 'styled-components/native';
import Styles from '../../style/Styles';

export enum MapEmployeeStatus {
    CLOCKED_IN = 'CLOCKED_IN',
    CLOCKED_OUT = 'CLOCKED_OUT',
    UNKNOWN = 'UNKNOWN'
}

type Style = { size: number }

const NoImageContainer = styled.View`
    height: ${(props: Style) => props.size}px;
    width: ${(props: Style) => props.size}px;
`;

const Container = styled.View`
    height: ${(props: Style) => props.size}px;
    width: ${(props: Style) => props.size}px;

`;


const ProfileContainer = styled.View`

`;

const Circle = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: gray; 
    border-radius: 50%;
    height: 100%;
    width: 100%;
`;

const Initals = styled.Text`
    
`;

type StatusStyles = {color: string}

const Status = styled.View`
    position: absolute;
    border: 1px solid white;
    background-color: ${(props: StatusStyles) => props.color};
    height: 12px;
    width: 12px;
    border-radius: 6px;
    right: 0;
    top: 0;
`;

const ImageContainer = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

type UserImageProps = {
    src: string | null
    firstName: string
    lastName: string
    status?: MapEmployeeStatus
    size?: number
    shouldShowStatus?: boolean
}

const UserImage = ({
    src,
    firstName,
    lastName,
    size = 50,
    status = MapEmployeeStatus.UNKNOWN,
    shouldShowStatus = false
}: UserImageProps) => {
    let statusColor = 'gray';

    if (status === MapEmployeeStatus.CLOCKED_IN) {
        statusColor = Styles.color.green;
    } else if (status === MapEmployeeStatus.CLOCKED_OUT) {
        statusColor = Styles.color.red;
    }

    return (
        <Container size={size}>
            <ProfileContainer>
                {src === null ? (
                    <NoImageContainer size={size}>
                        <Circle>
                            <Initals>
                                {firstName[0] + lastName[0]}
                            </Initals>
                        </Circle>
                    </NoImageContainer>
                ) : (
                    <ImageContainer>
                        <Image 
                            style={{
                                height: '100%', 
                                width: '100%',
                                borderRadius: 50
                            }}
                            source={{uri: src}} 
                        />
                    </ImageContainer>
                )}
            </ProfileContainer>
            {shouldShowStatus &&  <Status color={statusColor} />}
        </Container>
    );

}

export default UserImage;