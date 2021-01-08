import * as React from 'react';
import styled from 'styled-components';
import { faChevronRight, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from '../CustomReportsPage/style/Styles';
import ProfileImage from './ProfileImage';

export enum EmployeeStatus {
    CLOCKED_IN,
    CLOCKED_OUT,
    UNAVAILABLE
}

type StyleProps = {
    width: number
    mediaQuerySize: number
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    transition: all .2s;

    :hover {
        cursor: pointer;
        background-color: lightsteelblue;

    }

    @media (max-width: ${(props: {mediaQuerySize: number}) => props.mediaQuerySize}px) {
        align-items: flex-start;
        width: 200px;
        margin: 8px;
        margin-right: 0;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        flex: 0 0 auto;
    }
`;

const ProfileContainer = styled.div`

`;

const Content = styled.div`
    flex-grow: 1;
    margin-left: 4px;
    margin-right: 4px;
`;

const Title = styled.div`
    font-size: 20px;
    margin-right: 4px;
`;

const Location = styled.div`
    font-size: 16px;
    color: #79767F;
`;

const TitleContainer = styled.div`
    @media (min-width: ${(props: {mediaQuerySize: number}) => props.mediaQuerySize}px) {
        display: flex;
        flex-direction: row;
    }
`;

const Hours = styled.div`
    font-size: 16px;
    color: #79767F;
    @media (max-width: ${(props: {mediaQuerySize: number}) => props.mediaQuerySize}px) {
        display: none;
    }
`;

const HContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Icon = styled.div`
    margin-top: 4px;
`;

const ChevronIcon = styled.div`
    margin-left: 8px;
    @media (max-width: ${(props: {mediaQuerySize: number}) => props.mediaQuerySize}px) {
        display: none;
    }
`;

type MapEmployeeProps = {
    code: string
    firstName: string
    lastName: string
    location: string
    status: EmployeeStatus
    time: string
    profileImg?: string | null
    geoDescrepency?: boolean
    mediaQuerySize: number
    selected?: boolean
    onClick: () => void
}

const MapEmployee = ({
    code,
    firstName,
    lastName,
    location,
    status,
    time,
    profileImg = null,
    geoDescrepency = false,
    mediaQuerySize,
    selected = false,
    onClick,
}: MapEmployeeProps) => {
    const binding = useMapEmployee({
        code,
        firstName,
        lastName,
        status,
        profileImg,
        selected
    });

    return (
        <Container onClick={onClick} mediaQuerySize={mediaQuerySize} style={binding.containerStyle}>
            <ProfileImage 
                firstName={firstName}
                lastName={lastName}
                image={profileImg}
                showStatus={true}
                statusColor={binding.statusColor}
            />
            <Content>
                <HContainer>
                    <TitleContainer mediaQuerySize={mediaQuerySize}>
                        <Title>{code}</Title>
                        <Title>{`${firstName} ${lastName}`}</Title>
                    </TitleContainer>
                    <Icon>
                        {geoDescrepency && (
                            <FontAwesomeIcon 
                                icon={faGlobe} 
                                color={Styles.color.red}
                                size='lg'
                            />
                        )}
                    </Icon>
                </HContainer>
                <HContainer>
                    <Location>{location}</Location>
                    <Hours mediaQuerySize={mediaQuerySize}>{time}</Hours>
                </HContainer>
            </Content>
            <ChevronIcon mediaQuerySize={mediaQuerySize}>
                <FontAwesomeIcon 
                    icon={faChevronRight} 
                    color={'#828282'} 
                    size='lg'
                />
            </ChevronIcon>
        </Container>
    );
}

type UseMapEmployeeArgs = {
    code: string
    firstName: string
    lastName: string
    status: EmployeeStatus
    profileImg: string | null
    selected: boolean
}

const useMapEmployee = (args: UseMapEmployeeArgs) => {
    let statusColor: string = 'black';

    if (args.status === EmployeeStatus.CLOCKED_IN) statusColor = Styles.color.green;
    if (args.status === EmployeeStatus.CLOCKED_OUT) statusColor = Styles.color.red;
    if (args.status === EmployeeStatus.UNAVAILABLE) statusColor = 'gray';

    const containerStyle = args.selected ? {backgroundColor: 'rgb(121, 169, 73, 0.2)', boxShadow: 'none'} : {}

    return {
        statusColor,
        containerStyle
    }
}


export default MapEmployee;