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
    preHeader?: React.ReactNode
    postHeader?: React.ReactNode
    isHorizontal?: boolean
    spacingArray?: number[] | null
    shouldDisplayItem: (item: T) => boolean
    template: (item: T) => React.ReactNode
}

const SortableList = <T extends unknown>({
    data,
    sortables,
    preHeader = null,
    postHeader = null,
    isHorizontal = false,
    spacingArray = null, 
    shouldDisplayItem,
    template,
}: ListProps<T>) => {
    const binding = useSortableList({data, sortables, spacingArray});
    return (
        <View>
            <Header>
                <div style={{width: binding.spaces[0]}} />
                {preHeader}
                {Object.keys(sortables).map((currentSort: string, index: number) => {
                    return (
                        <>
                            <div style={{width: binding.spaces[index+1]}} />
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
                        </>
                    );
                })}
                <div style={{ width: binding.spaces[binding.spaces.length - 1]}} />
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
    spacingArray: number[] | null
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

    const spaces = React.useMemo(() => {
        let tmpSpaces = new Array(Object.keys(args.sortables).length + 2).fill(0);
        if (args.spacingArray !== null) {
            tmpSpaces = tmpSpaces.map((x, index) => {
                if (args.spacingArray![index] !== undefined) {
                    return args.spacingArray![index];
                } else {
                    return x; 
                }
            }); 
        }
        console.log(tmpSpaces);
        return tmpSpaces;
    }, [args.sortables, args.spacingArray]);




    return {
        orderedData,
        activeSort,
        onPressHeaderItem,
        chevronPointsDown,
        spaces,
    }
}

export default SortableList;