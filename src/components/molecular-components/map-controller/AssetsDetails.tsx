import * as React from 'react';
import styled from 'styled-components/native';
import { assetsActivityData } from '../../../mock-data/map-details/assetsListData';
import MapDetailsFrame from '../../frames/MapDetailsFrame';
import Tabs, { useWithTabs } from '../../molecular-components/Tabs';
import AssetsActivity from '../map-detail-lists/AssetsActivity';
import AssetListTemplate from '../templates/AssetListTemplate';

const Container = styled.View`
    display:flex;
    width: 400;
    border-color: '#ddd';
    padding:20px;
   
`;
const AssetsLabel = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;   

`;

type AssetsDetailsProps = { 
    searchValue: string
    filterValue : string
}

export enum AssetsDetailsTabs{
    ACTIVITY = 'Activity'
}

const AssetsDetails = (props:AssetsDetailsProps) => {
    const tabs = useWithTabs({
        tabs: [
            AssetsDetailsTabs.ACTIVITY 
        ],
        selected: AssetsDetailsTabs.ACTIVITY
    })
    return (
        <Container>
            <MapDetailsFrame
                subjectContainer={
                    <AssetsLabel>
                        <AssetListTemplate
                         assets= {{
                         code:20015,
                         image: null,
                         firstName:'Miller',
                         lastName:'Blue',
                         address: 'utah',
                         }}/>
                    </AssetsLabel>
                }
                tabs={<Tabs {...tabs.tabsBinding}/>}
                list={
                    <>
                    {tabs.selected === AssetsDetailsTabs.ACTIVITY && (
                        <>
                        <AssetsActivity
                        assetsRecords = {assetsActivityData}
                        filterValue = {props.filterValue}                                       
                        />
                        </>
                    )}
                    </>
                }
                goToNext={() => console.log('Next')}
                goToPrev={() => console.log('Prev')}
                back={() => console.log('back')}
                />
                </Container>
    )
}

export default AssetsDetails;