import * as React from 'react';
import Tabs from '../../molecular-components/Tabs';
import SearchBar from '../../atomic-components/SearchBar';
import MapsLocations from '../../molecular-components/maps/MapsLocations';
import MapsAssets from '../../molecular-components/maps/MapsAssets';
import MapsEmployees from '../../molecular-components/maps/MapsEmployees';
import { MapTabs } from '../../../types/MapTabs';

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
                <MapsEmployees searchValue={searchValue} />}
            {selectedTab === MapTabs.LOCATIONS && 
                <MapsLocations searchValue={searchValue} />}
            {selectedTab === MapTabs.ASSETS && 
                <MapsAssets searchValue={searchValue} />}
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