import * as React from 'react';
import SortableList from '../../frames/SortableList';
import styled from 'styled-components/native';
import AssetsDetails from './AssetsDetails';
import { TouchableOpacity } from 'react-native';
import { MapControllerActions } from '../../../pages/MapsPage';
import { assetsListData } from '../../../mock-data/map-details/assetsListData';
import AssetListTemplate, { AssetsListRecord } from '../../molecular-components/templates/AssetListTemplate';

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
                        <TouchableOpacity onPress={props.actions.goToDetails}>
                           <AssetListTemplate assets={assets} />
                        </TouchableOpacity>
                    }
                    sortables={{
                        code: { title: 'Code', sort: (a: AssetsListRecord, b: AssetsListRecord) => (a.assetsCode > b.assetsCode ? -1 : 1) },
                        firstName: { title: 'First Name', sort: (a: AssetsListRecord, b:AssetsListRecord) => (a.assetsFirstName > b.assetsFirstName ? -1 : 1) },
                        lastName: { title: 'Last Name', sort: (a: AssetsListRecord, b: AssetsListRecord) => (a.assetsLastName > b.assetsLastName ? -1 : 1) },
                    }}
                    shouldDisplayItem={(item: AssetsListRecord) => true}
                />
            )}
        </Container>
    );
};

export default MapsAssets;