import * as React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Styles from '../../style/Styles';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Header = styled.View`
    display: flex;
    flex-direction: row;
`;

type BodyStyles = {
    isHorizontal: boolean
}

const Body = styled.View`
    display: flex;
    flex-direction: ${(props: BodyStyles) => props.isHorizontal ? 'row' : 'column'};
`;

const HeaderItem = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
`;

const HeaderText = styled.Text`
    padding-left: 10px;
    padding-right: 4px;
    color: ${Styles.color.green}; 
`;

type Sortables = {
    [key: string]: {
        title: string, sort: (a: any, b: any) => number
    }
} 

type ListProps<T> = {
    data: T[]
    sortables: Sortables
    isHorizontal?: boolean
    preHeader?: React.ReactNode
    postHeader?: React.ReactNode
    shouldDisplayItem: (item: T) => boolean
    template: (item: T) => React.ReactNode
}

const List = <T extends unknown>({
    data,
    sortables,
    isHorizontal = false,
    preHeader = null,
    postHeader = null,
    shouldDisplayItem,
    template,
}: ListProps<T>) => {
    const binding = useSortableList({data, sortables});
    
    return (
        <View>
            <Header>
                {preHeader}
                {Object.keys(sortables).map((currentSort: string) => (
                    <HeaderItem key={currentSort} onPress={() => binding.onPressHeaderItem(currentSort)}>
                        <HeaderText>
                            {sortables[currentSort].title}
                        </HeaderText>
                        <FontAwesomeIcon 
                            size={16}
                            color={Styles.color.green} 
                            icon={binding.chevronPointsDown(currentSort) ? faChevronDown : faChevronUp} 
                        />
                    </HeaderItem>
                ))}
                {postHeader}
            </Header>
            <Body isHorizontal={isHorizontal}>
                {binding.orderedData.map(item => {
                    if (shouldDisplayItem(item)) return template(item);
                })}
            </Body>
        </View>
    );
}

type UseSortableListArgs<T> = {
    data: T[]
    sortables: Sortables
}

// Sorting could be done with flex value which would keep profile images from being re-requested.

const useSortableList = <T extends unknown>(args: UseSortableListArgs<T>) => {
    const [orderedData, setOrderedDataTo] = React.useState(args.data);
    const [activeSort, setActiveSortTo] = React.useState(null as null | string);
    const [isSortingDown, setSortingDownTo] = React.useState(true);

    const onPressHeaderItem = (currentSort: string) => {
        let sortDirection = true;
        setActiveSortTo(currentSort);
        if (activeSort === currentSort) {
            sortDirection = !isSortingDown;
        } 
        setSortingDownTo(sortDirection);
        setOrderedDataTo(orderedData.sort((a: T, b: T) => {
            // if (activeSort === null) return 0;
            return sortDirection ? (
                args.sortables[currentSort].sort(a, b) * -1 
            ) : (
                args.sortables[currentSort].sort(a, b)
            )
        }));
    }

    const chevronPointsDown = (currentSort: string) => {
        let chevronIsDown = true;
        if (activeSort === currentSort) {
            chevronIsDown = isSortingDown;
        }
        return chevronIsDown;
    }
    return {
        orderedData,
        activeSort,
        onPressHeaderItem,
        chevronPointsDown
    }
}

export default List;