import {  faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as React from 'react';
import Styles from '../../style/Styles';
import styled from 'styled-components/native';

const Container = styled.View`
    display: flex;
    flex-direction: column;
`;

const SubjectContainer = styled.View`
`;

const Tabs = styled.View`
`;

const List = styled.View`
`;

const Navigation = styled.View`

`;

const NavButton = styled.TouchableOpacity`

`;

const ButtonText = styled.Text`
`;

const ButtonContainer = styled.View`
`;

type MapDetailsFrameProps = {
    subjectContainer: React.ReactNode
    tabs: React.ReactNode
    list: React.ReactNode
}

const MapDetailsFrame = (props: MapDetailsFrameProps) => {
    return (
        <Container>
            <Navigation >
                <NavButton>
                    <FontAwesomeIcon
                        size={16}
                        color={Styles.color.green}
                        icon={faChevronLeft}
                    />
                    <ButtonText>Back</ButtonText>
                </NavButton>
                <ButtonContainer>
                    <NavButton>
                        <FontAwesomeIcon
                            size={16}
                            color={Styles.color.green}
                            icon={faChevronLeft}
                        />
                        <ButtonText>Prev</ButtonText>
                    </NavButton>
                    <NavButton>
                        <FontAwesomeIcon
                            size={16}
                            color={Styles.color.green}
                            icon={faChevronRight}
                        />
                        <ButtonText>Next</ButtonText>
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