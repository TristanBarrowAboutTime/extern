import * as React from 'react';
import Tabs, { useWithTabs } from '../components/molecular-components/Tabs';
import styled from 'styled-components/native';
import { MapTabs } from '../types/MapTabs';
import { useWithMap } from '../components/cellular-components/map/Map';
import { useWithSearchBar } from '../hooks/component-hooks/atomic-components/useSearchBar';
import SearchBar from '../components/atomic-components/SearchBar';
import { useWithEmployeeDetails } from '../components/cellular-components/map-controller/EmployeeDetails';
import { useWithLocationDetails } from '../components/cellular-components/map-controller/LocationDetails';
import { useWithAssetDetails } from '../components/cellular-components/map-controller/AssetsDetails';
import MapsEmployees from '../components/cellular-components/map-controller/MapsEmployees';
import MapsLocations from '../components/cellular-components/map-controller/MapsLocations';
import MapsAssets from '../components/cellular-components/map-controller/MapsAssets';

const Container = styled.View`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: calc(100vh - 34px);
`;

const MapController = styled.View`
    display: flex;
    flex-direction: column;
`; 

const MapsPage = () => {
    const {
        mainTabs,
        tabs,
        search,
        isShowingDetails,
        actions,
    } = useMapPage();
    return (
        <Container>
            <MapController>
                {mainTabs.isShowing && <Tabs {...mainTabs.binding}/>}
                <SearchBar {...search.binding} margin={8} />

                {mainTabs.selected === MapTabs.EMPLOYEE && (
                    <MapsEmployees
                        searchValue={search.value} 
                        tabs={tabs.employees}
                        isShowingDetails={isShowingDetails}
                        actions={actions}
                        activeEmployees={22}
                        inactiveEmployees={4}
                    />
                )}

                {mainTabs.selected === MapTabs.LOCATIONS && (
                    <MapsLocations 
                        searchValue={search.value} 
                        tabs={tabs.locations}
                        isShowingDetails={isShowingDetails}
                        actions={actions}
                    />
                )}

                {mainTabs.selected === MapTabs.ASSETS && (
                    <MapsAssets
                        searchValue={search.value}
                        tabs={tabs.assets}
                        isShowingDetails={isShowingDetails}
                        actions={actions}
                    />
                )}
            </MapController>
            {/* <Map 
                
                viewport={binding.mapViewport} 
                actions={binding.mapActions}
                mapConfigs={clusterConfig}
            /> */}
        </Container>
    );
}

export type MapControllerActions = {
    back: () => void
    next: () => void
    prev: () => void
    goToDetails: () => void
    goToList: () => void
}

const useMapPage = () => {
    const map = useWithMap({});
    const searchBar = useWithSearchBar();
    const [isShowingDetails, setIsShowingDetailsTo] = React.useState(false);
    const employeeTabs = useWithEmployeeDetails();
    const locationTabs = useWithLocationDetails();
    const assetTabs = useWithAssetDetails();

    const mainTabs = useWithTabs({
        tabs: [
            MapTabs.EMPLOYEE,
            MapTabs.LOCATIONS,
            MapTabs.ASSETS,
        ],
        selected: MapTabs.EMPLOYEE
    });
    const goToDetails = () => setIsShowingDetailsTo(true);
    const goToList = () => setIsShowingDetailsTo(false);
    const actions = {
        back: goToList,
        next: () => console.log('next'),
        prev: () => console.log('prev'),
        goToDetails,
        goToList
    }
    
    return {
        mainTabs: {
            binding: mainTabs.tabsBinding,
            isShowing: !isShowingDetails,
            selected: mainTabs.selected,
        },
        search: {
            binding: searchBar.searchBinding,
            value: searchBar.value,
        },
        tabs: {
            employees: employeeTabs,
            locations: locationTabs,
            assets: assetTabs,
        },
        isShowingDetails,
        mapViewport: map.viewport,
        mapActions: map.actions,
        actions
    }
}

export default MapsPage;