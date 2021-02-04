import * as React from 'react';
import { MapListLocation } from '../../../types/MapListLocation';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components/native';
import LocationIcon from '../../atomic-components/LocationIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


type CompTheme = {
    colors: {
        error: string
        subTitle: string
        normalIcon: string
        locationPin: string
    }
}

const DEFAULT_THEME = {
    theme: {
        colors: {
            error: 'red',
            subTitle: '#525252',
            normalIcon: '#5A5A5A',
            locationPin: 'red'
        }
    } as CompTheme
}


const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 360px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const Content = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 8px;
    margin-right: 8px;
`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

const Title = styled.Text`
    font-size: 20px;
`;

const SubTitle = styled.Text`
    color: ${(props: { theme: CompTheme }) => props.theme.colors.subTitle};
`;

SubTitle.defaultProps = DEFAULT_THEME;

type LocationListTemplateProps = {
    location: MapListLocation 
    theme?: CompTheme
}

const LocationListTemplate = ({ 
    location,
    theme = DEFAULT_THEME.theme
}: LocationListTemplateProps) => {
    const { 
        locationCode, 
        locationFirstName, 
        locationLastName, 
        jobAddress 
    } = location;

    return (
        <Container>
            <LocationIcon 
                first={locationFirstName}
                last={locationLastName}
                size={40} 
                color={theme.colors.error}
            />
            <Content>
                <Row>
                    <Title>{`${locationCode} ${locationFirstName} ${locationLastName}`}</Title>
                </Row>
                <SubTitle>{jobAddress}</SubTitle>
            </Content>
            <FontAwesomeIcon icon={faChevronRight} color={theme.colors.normalIcon} />
        </Container>
    );
}

export default withTheme(LocationListTemplate);