import * as React from 'react';
import styled from 'styled-components/native';
import MapDetailsFrame from '../../frames/MapDetailsFrame';
import Tabs, { useWithTabs } from '../../molecular-components/Tabs';
import AssetsActivity from '../../molecular-components/map-detail-lists/AssetsActivity';
import { MapControllerActions } from '../../../pages/MapsPage';
import UserImage from '../../atomic-components/UserImage';
import { useAssetActivityData } from '../../../hooks/loadable-data/live-maps/controller/assets/useAssetActivityData';

const Container = styled.View`
    display: flex;
    width: 400px;
    border-color: '#DDDDDD';
    padding: 20px;
`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;

`;

const Content = styled.View`
    display: flex;
    padding:10px;
    flex-direction: column;
    flex: 1;
    margin-left: 8px;
    margin-right: 8px;
`;

const Title = styled.View`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex: 1;
   
`;
const Text = styled.Text`
    font-size: 20px;

`;
const SubTitle = styled.Text`
    
`;
const AssetsLabel = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;   

`;

export type AssetsListRecord = {
    assetsCode: string
    assetsFirstName: string
    assetsLastName: string
    employeeCode: number
    employeeFirstName: string
    employeeLastName: string
    address: string
    image: null | string
}
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
    const assetsActivityData = useAssetActivityData();
    return (
        <Container>
            <MapDetailsFrame
                actions={actions}
                subjectContainer={
                    <AssetsLabel>
                        <UserImage
                            src={null}
                            firstName={'Miller'}
                            lastName={'Big Blue 450'}
                            size={40}
                        />
                        <Content>
                            <Row>
                                <Title>
                                    <Text>{`${'SP-WM-07'} ${'Miller'} ${'Big Blue 450'}`} </Text>
                                </Title >

                            </Row>
                            <Row>
                                <SubTitle>{'1345 Erda Water'}</SubTitle>
                            </Row>
                        </Content>


                        {/* <AssetListTemplate
                            assets= { assetsListData[0] }
                         /> */}
                    </AssetsLabel>
                }
                tabs={<Tabs {...tabs.tabsBinding} />}
                list={
                    <>
                        {tabs.selected === AssetsDetailsTabs.ACTIVITY && (
                            <AssetsActivity
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
        tabs: [AssetsDetailsTabs.ACTIVITY],
        selected: AssetsDetailsTabs.ACTIVITY
    });

    return tabs; // asset tabs
}

export default AssetsDetails;