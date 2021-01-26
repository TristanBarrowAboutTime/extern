import * as React from 'react';
import SortableList from '../../frames/SortableList';
import styled from 'styled-components/native';
import AssetsDetails from './AssetsDetails';
import { TouchableOpacity } from 'react-native';
import { MapControllerActions } from '../../../pages/MapsPage';

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
                    data={[]}
                    
                    template={(employee: any) => 
                        <TouchableOpacity onPress={props.actions.goToDetails}>
                            <div>Asset Template</div>
                        </TouchableOpacity>
                    }
                    sortables={{}}
                    shouldDisplayItem={(item: any) => true}
                />
            )}
        </Container>
    );
};

export default MapsAssets;