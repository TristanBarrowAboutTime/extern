import * as React from 'react';
import styled from 'styled-components/native';
import MapDetailsFrame from '../../frames/MapDetailsFrame';
import Tabs, { useWithTabs } from '../../molecular-components/Tabs';
import AssetsActivity from '../../molecular-components/map-detail-lists/AssetsActivity';
import AssetListTemplate from '../../molecular-components/templates/AssetListTemplate';
import { MapControllerActions } from '../../../pages/MapsPage';

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
    const { tabs, actions } = props; 
    return (
        <Container>
            <MapDetailsFrame
                actions={actions}
                subjectContainer={
                    <AssetsLabel>
                        <AssetListTemplate
                            assets= {{
                                code: 20015,
                                image: null,
                                firstName: 'Miller',
                                lastName: 'Blue',
                                address: 'utah',
                            }}
                        />
                    </AssetsLabel>
                }
                tabs={<Tabs {...tabs.tabsBinding}/>}
                list={
                    <>
                        {tabs.selected === AssetsDetailsTabs.ACTIVITY && (
                            <>
                                <AssetsActivity
                                    status= {'assignment'}
                                    employee ={'1345 Erda Water'}
                                />
                                <AssetsActivity
                                    status= {'time record'}
                                    employee ={'1005 Payson Utah'}
                                />
                            </>
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