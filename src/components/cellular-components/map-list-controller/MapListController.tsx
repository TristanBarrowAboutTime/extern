import * as React from 'react';
import Tabs from '../../molecular-components/Tabs';
import SearchBar from '../../atomic-components/SearchBar';
import { MapTabs } from '../../../types/MapTabs';
import EmployeeDetails from '../../molecular-components/map-controller/EmployeeDetails';
import LocationDetails from '../../molecular-components/map-controller/LocationDetails';
import AssetsDetails from '../../molecular-components/map-controller/AssetsDetails';

type MapListControllerProps = {
    tabBinding: any // generic in case tabs changes
    searchBinding: any // generic in case search binding needs to change
    searchValue: string
    selectedTab: string 
}
 
const MapListController = ({
    tabBinding,
    searchBinding,
    searchValue,
    selectedTab
}: MapListControllerProps) => {
    const binding = useMapController();

    return (
        <div>
            {binding.isShowingTabs && <Tabs {...tabBinding}/>}
            <SearchBar {...searchBinding} margin={8} />
            {selectedTab === MapTabs.EMPLOYEE && 
                <EmployeeDetails searchValue={searchValue} />}
            {selectedTab === MapTabs.LOCATIONS && 
                <LocationDetails searchValue={searchValue} />}
            {selectedTab === MapTabs.ASSETS && 
                <AssetsDetails searchValue={searchValue} />}
        </div>
    );
}

const useMapController = () => {
    const [isShowingTabs, setIsShowingTabsTo] = React.useState(true);

    return {
        isShowingTabs,
        setIsShowingTabsTo,
    }
}

export default MapListController;