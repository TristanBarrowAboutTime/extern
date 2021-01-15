import * as React from 'react';
import styled from 'styled-components/native';
import MapDetailsFrame from '../../frames/MapDetailsFrame';
import Tabs, { useWithTabs } from '../../molecular-components/Tabs';
import AssetsActivity from '../map-detail-lists/AssetsActivity';


const Container = styled.View`
    display:flex;
    width: 400;
    border-color: '#ddd';
    padding-left:20;
    padding-right:20;
    padding-top:20;
    padding-bottom:20;
`;
const AssetsLabel = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;   

`;

type AssetsDetailsProps ={
    serachValue: string
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
                        {/* <AssetImage>

                        </AssetImage> */}
                    </AssetsLabel>
                }
                tabs={<Tabs {...tabs.tabsBinding}/>}
                list={
                    <>
                    {tabs.selected === AssetsDetailsTabs.ACTIVITY && (
                        <AssetsActivity
                        employee ={'employee name'}
                        />
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