import React from 'react';
import { useWithSearchBar } from '../hooks/component-hooks/atomic-components/useSearchBar';
import { useWithTabs } from '../components/molecular-components/Tabs';
import styled from 'styled-components/native';
import { MapTabs } from '../types/MapTabs';
import MapController from '../components/cellular-components/map-list-controller/MapListController';

const Container = styled.View`
    display: flex;
    flex-direction: row;
    width: 340px;
`;

const MapsPage = () => {
    const binding = useMapPage();
    
    return (
        <Container>
            <MapController 
                tabBinding={binding.tabBinding}
                searchBinding={binding.searchBinding}
                searchValue={binding.searchValue}
                selectedTab={binding.selectedTab}
            />
            <div>map</div>
        </Container>
    );
}

const useMapPage = () => {
    const searchBar = useWithSearchBar();
    const tabs = useWithTabs({
        tabs: [
            MapTabs.EMPLOYEE,
            MapTabs.LOCATIONS,
            MapTabs.ASSETS
        ], 
        selected: MapTabs.EMPLOYEE
    });

    return {
        tabBinding: tabs.tabsBinding,
        searchBinding: searchBar.searchBinding,
        searchValue: searchBar.value,
        selectedTab: tabs.selected
    }
}


export default MapsPage;