import * as React from 'react';
import { useWithSearchBar } from '../hooks/component-hooks/atomic-components/useSearchBar';
import { useWithTabs } from '../components/molecular-components/Tabs';
import styled from 'styled-components/native';
import { MapTabs } from '../types/MapTabs';
import Map, { useWithMap } from '../components/cellular-components/mapbox-maps/Map';
import { clusterConfig } from '../mock-data/mapConfigs';

const Container = styled.View`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: calc(100vh - 34px);
`;

const MapsPage = () => {
    const binding = useMapPage();
    return (
        <Container>
            <Map 
                viewport={binding.mapViewport} 
                actions={binding.mapActions}
                mapConfigs={clusterConfig}
            />
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
    const map = useWithMap({ });

    return {
        tabBinding: tabs.tabsBinding,
        searchBinding: searchBar.searchBinding,
        searchValue: searchBar.value,
        selectedTab: tabs.selected,
        mapViewport: map.viewport,
        mapActions: map.actions
    }
}

export default MapsPage;