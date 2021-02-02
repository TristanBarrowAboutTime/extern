import React from 'react';
import {  faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Styles from '../../style/Styles';
import styled from 'styled-components/native';
import { MapControllerActions } from '../../pages/MapsPage';

const STRINGS = {
    BACK: 'Back',
    PREV: 'Prev',
    NEXT: 'Next',
}

const Container = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const SubjectContainer = styled.View`
    flex-direction: row;
    margin-bottom: 10px;

`;

const Tabs = styled.View`

`;

const List = styled.View`

`;

const Navigation = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

const NavButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ButtonText = styled.Text`
    font-size: 20px;
    color: ${Styles.color.green};
    padding: 4px;
`;

const ButtonContainer = styled.View`
    display: flex; 
    flex-direction: row;
`;

type MapDetailsFrameProps = {
    subjectContainer: React.ReactNode
    tabs: React.ReactNode
    list: React.ReactNode
    actions: MapControllerActions
}

const MapDetailsFrame = (props: MapDetailsFrameProps) => {
    return (
        <Container>
            <Navigation>
                <NavButton onPress={props.actions.back}>
                    <FontAwesomeIcon
                        size={16}
                        color={Styles.color.green}
                        icon={faChevronLeft}
                    />
                    <ButtonText>
                        {STRINGS.BACK}
                    </ButtonText>
                </NavButton>
                <ButtonContainer>
                    <NavButton onPress={props.actions.prev}>
                        <FontAwesomeIcon
                            size={16}
                            color={Styles.color.green}
                            icon={faChevronLeft}
                        />
                        <ButtonText>
                            {STRINGS.PREV}
                        </ButtonText>
                    </NavButton>
                    <NavButton onPress={props.actions.next}>
                        <ButtonText>
                            {STRINGS.NEXT}
                        </ButtonText>
                        <FontAwesomeIcon
                            size={16}
                            color={Styles.color.green}
                            icon={faChevronRight}
                        />
                    </NavButton>
                </ButtonContainer>
            </Navigation>
            <SubjectContainer>
                {props.subjectContainer}
            </SubjectContainer>

            <Tabs>
                {props.tabs}
            </Tabs>

            <List>
                {props.list}
            </List>

        </Container>
    )
}

export default MapDetailsFrame;