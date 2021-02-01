import * as React from 'react';
import styled from 'styled-components/native';
import MapDetailsFrame from '../../frames/MapDetailsFrame';
import Tabs, { useWithTabs } from '../../molecular-components/Tabs';
import AssetsActivity from '../../molecular-components/map-detail-lists/AssetsActivity';
import AssetListTemplate from '../../molecular-components/templates/AssetListTemplate';
import { MapControllerActions } from '../../../pages/MapsPage';
import { assetsListData } from '../../../mock-data/map-details/assetsListData';
import { assetsActivityData } from '../../../mock-data/assetsActivityListData';
import UserImage from '../../atomic-components/UserImage';

const Container = styled.View`
    display: flex;
    width: 400px;
    border-color: '#DDDDDD';
    padding: 20px;
`;

const AssetsLabel = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;   

`;

export enum AssetsDetailsTabs {
    ACTIVITY = 'Activity'
}

type AssetsDetailsProps = { 
    searchValue: string
    tabs: {
        tabsBinding: any
        selected: string
    }
    actions: MapControllerActions
}

const AssetsDetails = (props: AssetsDetailsProps) => {
    const { tabs, actions, searchValue } = props; 
    return (
        <Container>
            <MapDetailsFrame
                actions={actions}
                subjectContainer={
                    <AssetsLabel>
                         <AssetListTemplate
                            assets= { assetsListData[0] }
                         />
                    </AssetsLabel>
                }
                tabs={<Tabs {...tabs.tabsBinding}/>}
                list={
                    <>
                        {tabs.selected === AssetsDetailsTabs.ACTIVITY && (
                            <AssetsActivity
                                assetsRecords={assetsActivityData}
                                filterValue={searchValue} 
                            />
                        )}
                    </>
                }
            />
        </Container>
    )
}

export const useWithAssetDetails = () => {
    const tabs = useWithTabs({
        tabs: [ AssetsDetailsTabs.ACTIVITY ],
        selected: AssetsDetailsTabs.ACTIVITY
    });

    return tabs; // asset tabs
}

export default AssetsDetails;