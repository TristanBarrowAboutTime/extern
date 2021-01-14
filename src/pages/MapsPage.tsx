import React from 'react';
import SearchBar from '../components/atomic-components/SearchBar';
import { useWithSearchBar } from '../hooks/component-hooks/atomic-components/useSearchBar';
import Tabs, { useWithTabs } from '../components/molecular-components/Tabs';
import styled from 'styled-components/native';
import MapsEmployees from '../components/molecular-components/maps/MapsEmployees';
import EmployeeDetails from './EmployeeDetails';
import EmployeeLocation from './Location';

enum MapTabs {
    EMPLOYEE = 'Employee',
    LOCATIONS = 'Locations',
    ASSETS = 'Assets'
}

const Container = styled.View`
    width: 340px; 
`;


const MapsPage = () => {
    const searchBar = useWithSearchBar();
    const tabs = useWithTabs({
        tabs: [
            MapTabs.EMPLOYEE,
            MapTabs.LOCATIONS,
            MapTabs.ASSETS
        ], 
        selected: MapTabs.EMPLOYEE
    });
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
}

export default MapsPage;