import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Styles from '../../style/Styles';

const Container = styled.View`

    display: flex;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: ${Styles.color.green};

`;

type TabStyle = {
    isSelected: boolean
}

const Tab = styled.Text`
    padding: 2px 8px 2px 8px;
    background-color: ${(props: TabStyle) => props.isSelected ? Styles.color.green : 'white'};
`;

type TabsProps = {
    tabs: string[]
    selected: string
    select: (tab: string) => void
}

const Tabs = ({
    tabs,
    selected,
    select,
}: TabsProps) => {
    return (
        <Container>
            {tabs.map((tab: string) => {
                return (
                    <TouchableOpacity onPress={() => select(tab)}>
                        <Tab key={tab} isSelected={tab === selected}>
                            {tab}
                        </Tab>
                    </TouchableOpacity>
                );
            })}
        </Container>
    );
}


type UseWithTabsArgs = {
    tabs: string[]
    selected: string
}

export const useWithTabs = (args: UseWithTabsArgs) => {
    const [_tabs, setSelectableTabsTo] = useState(args.tabs as string[]);
    const [_selected, setSelectedTo] = useState(args.selected as string);

    return {
        tabsBinding: {
            tabs: _tabs,
            selected: _selected,
            select: setSelectedTo
        },
        selected: _selected
    }
}

export default Tabs;