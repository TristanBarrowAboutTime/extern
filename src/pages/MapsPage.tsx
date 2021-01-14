import React from 'react';
import { useWithSearchBar } from '../hooks/component-hooks/atomic-components/useSearchBar';
import { useWithTabs } from '../components/molecular-components/Tabs';
import styled from 'styled-components/native';
import MapsEmployees from '../components/molecular-components/maps/MapsEmployees';
import EmployeeDetails from './EmployeeDetails';
import EmployeeLocation from './EmployeeLocation';

enum MapTabs {
    EMPLOYEE = 'Employee',
    LOCATIONS = 'Locations',
    ASSETS = 'Assets'
}
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
<<<<<<< HEAD
    return (
        <Container>
            <SearchBar {...searchBar.searchBinding} margin={8} />
            <Tabs {...tabs.tabsBinding}/>
            {tabs.selected === MapTabs.EMPLOYEE && 
                <MapsEmployees searchValue={searchBar.value} />
                }
            {tabs.selected === MapTabs.LOCATIONS && 
              <EmployeeLocation searchValue={searchBar.value} />
            }
            {tabs.selected === MapTabs.ASSETS && 
                <div>Assets</div>}
        </Container>
    );
=======

    return {
        tabBinding: tabs.tabsBinding,
        searchBinding: searchBar.searchBinding,
        searchValue: searchBar.value,
        selectedTab: tabs.selected
    }
>>>>>>> bb6c7824ecb58e61804f80b44679aa33cfeabf79
}


export default MapsPage;