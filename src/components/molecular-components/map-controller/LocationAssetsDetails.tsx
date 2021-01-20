import * as React from 'react'; 
import { useWithSearchBar } from '../../../hooks/component-hooks/atomic-components/useSearchBar';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import SearchBar from '../../atomic-components/SearchBar';
 
const ContainerView = styled.View`
    display:flex;
    width: 400;
    border-color: '#ddd';
    padding-left:20;
    padding-right:20;
    padding-top:20;
    padding-bottom:20;
`;

const InnerView = styled.View`
    display:flex;
    flex-direction:row;
    align-items: center;
`;

const CardView = styled.View`
    padding-left:10;
    padding-right:10;
    padding-top:10;
    padding-bottom:10;
    margin-top:10;
    border-width: 1;
    border-radius: 2;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-offset: {width: 0; height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 1;
`;

const TextView =styled.View`
    flex-direction:row;
    justify-content: space-between;
`;


const LocationAssetsDetails = () => {
    const searchBar = useWithSearchBar();
return (
    <ContainerView>
        <SearchBar {...searchBar.searchBinding} margin={8}/>

        <InnerView>
      
            <Text style={{paddingLeft:20}}>1004 Joseph Carrigan</Text>
            </InnerView>   
            <CardView>
            <TextView>
            <Text>AP-WM-07 Miller Big Blu 450 Duo</Text>
            <Text>1002 Joseph Carrign</Text>
            <Text>Full Service</Text>
            <Text>Time on Site:25 days</Text>
            <Text>Last activity: 12:45pm MDT</Text>
            </TextView>
            <Text>Notes</Text>
            </CardView>
            <CardView>
            <Text>SP-WS-02-WALL/FLOOR SCANNER</Text>
            <Text>1002 Joseph Carrign</Text>       
            <Text>Time Assigned to site: 45 days</Text> 
            <Text>Notes</Text> 
            </CardView>       
        </ContainerView>

        )
    }
export default LocationAssetsDetails;