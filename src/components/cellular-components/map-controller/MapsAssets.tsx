import * as React from 'react';
import SortableList from '../../frames/SortableList';
import styled from 'styled-components/native';
import AssetsDetails from './AssetsDetails';
import { TouchableOpacity, View,Text } from 'react-native';
import { MapControllerActions } from '../../../pages/MapsPage';
import { assetsListData } from '../../../mock-data/map-details/assetsListData';
import AssetListTemplate, { AssetsListRecord } from '../../molecular-components/templates/AssetListTemplate';
import { assetsActivityData } from '../../../mock-data/assetsActivityListData';

const Container = styled.View`

`;

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
    const binding = useMapAssets({
        goToDetails: props.actions.goToDetails
    });

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
                    data={assetsListData}
                    
                    template={(assets: AssetsListRecord) => 
                        <TouchableOpacity onPress={() => binding.checkActivityDetails(assets)}>
                           <AssetListTemplate showNoActivity={binding.checkIsActivityAvailable(assets)} assets={assets} />
                        </TouchableOpacity>
                    }
                    postHeader={<View><Text>Active Assets {assetsListData.length}</Text></View>}
                    sortables={{
                        code: { title: 'Code', sort: (a: AssetsListRecord, b: AssetsListRecord) => (a.assetsCode > b.assetsCode ? -1 : 1) },
                        firstName: { title: 'First', sort: (a: AssetsListRecord, b:AssetsListRecord) => (a.assetsFirstName > b.assetsFirstName ? -1 : 1) },
                        lastName: { title: 'Last', sort: (a: AssetsListRecord, b: AssetsListRecord) => (a.assetsLastName > b.assetsLastName ? -1 : 1) },
                    }}
                    shouldDisplayItem={(item: AssetsListRecord) => true}
                />
            )}
        </Container>
    );
};

type UseMapAssetsArgs = {
    goToDetails: () => void
}

const useMapAssets = (args: UseMapAssetsArgs) => {
    const checkActivityDetails = (assets: AssetsListRecord) => {
        if (checkIsActivityAvailable(assets)){
            args.goToDetails();
        }  
    }

    const checkIsActivityAvailable = (assets: AssetsListRecord) => {
        if (assetsActivityData.find(item => item.assetsCode === assets.assetsCode)) {
            return true;
        }  
        return false;
    }

    return {
        checkIsActivityAvailable,
        checkActivityDetails,
    }
}

export default MapsAssets;