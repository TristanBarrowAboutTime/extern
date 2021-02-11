import * as React from 'react';
import SortableList from '../../frames/SortableList';
import styled from 'styled-components/native';
import AssetsDetails from './AssetsDetails';
import { TouchableOpacity, View,Text } from 'react-native';
import { MapControllerActions } from '../../../pages/MapsPage';
import AssetListTemplate from '../../molecular-components/templates/AssetListTemplate';
import { useMapAssetsData, AssetMapControllerData } from '../../../hooks/loadable-data/live-maps/controller/assets/useMapAssetsData';

const Container = styled.View``;

type MapAssetsProps = {
    searchValue: string,
    isShowingDetails: boolean
    tabs: {
        tabsBinding: any,
        selected: string
    }
    actions: MapControllerActions
}

const MapsAssets = (props: MapAssetsProps) => {
    const mapAssetData = useMapAssetsData();
    
    return (
        <Container>
            {props.isShowingDetails ? (
                <AssetsDetails 
                    searchValue={props.searchValue}
                    tabs={props.tabs}
                    actions={props.actions}
                />
            ) : (
                <SortableList
                    data={mapAssetData}
                    spacingArray={[40, 0, 0, 0, 35]}
                    template={(asset: AssetMapControllerData) => 
                        <TouchableOpacity onPress={props.actions.goToDetails}>
                           <AssetListTemplate showNoActivity={true} showNoLocation={true} asset={asset} />
                        </TouchableOpacity>
                    }
                    postHeader={<Text>Active Assets {mapAssetData.length}</Text>}
                    sortables={{
                        code: { title: 'Code', sort: (a: AssetMapControllerData, b: AssetMapControllerData) => (a.assetsCode > b.assetsCode ? -1 : 1) },
                        firstName: { title: 'First', sort: (a: AssetMapControllerData, b: AssetMapControllerData) => (a.assetsFirstName > b.assetsFirstName ? -1 : 1) },
                        lastName: { title: 'Last', sort: (a: AssetMapControllerData, b: AssetMapControllerData) => (a.assetsLastName > b.assetsLastName ? -1 : 1) },
                    }}
                    shouldDisplayItem={(item: AssetMapControllerData) => true}
                />
            )}
        </Container>
    );
};

export default MapsAssets;