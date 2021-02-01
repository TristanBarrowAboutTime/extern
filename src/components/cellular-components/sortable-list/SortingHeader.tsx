import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const ItemText = styled.Text`
    padding-right: 4px;
`;

const ItemContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

type HeaderItem = {
    text: string
    isDown: boolean
    preSpace?: number
    postSpace?: number
}

type SortingHeaderProps = {
    headerItems: HeaderItem[]
}

const SortingHeader = (props: SortingHeaderProps) => {
    return (
        <Container>
            {props.headerItems.map((headerItem: HeaderItem) => {
                return (
                    <ItemContainer>
                        {headerItem.preSpace && <View style={{ width: headerItem.preSpace}} />}
                        <ItemText>{headerItem.text}</ItemText>
                        <FontAwesomeIcon icon={headerItem.isDown ? faChevronDown : faChevronUp} />
                        {headerItem.postSpace && <View style={{ width: headerItem. postSpace}} />}
                    </ItemContainer>
                );
            })}
        </Container>
    );
}

export default SortingHeader;