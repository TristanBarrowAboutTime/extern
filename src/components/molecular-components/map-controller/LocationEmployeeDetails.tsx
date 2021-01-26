import * as React from 'react'; 
import { useWithSearchBar } from '../../../hooks/component-hooks/atomic-components/useSearchBar';
import { Text} from 'react-native';
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
    padding: 10px;
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

const NavView = styled.View`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    margin-bottom:10;
`;

const Avatar = styled.View`
    width: 50;
    height: 50;
    border-radius: 75;
`;

const ImageCircle = styled.Image`
    width: 50;
    height: 50;
    border-radius: 75;   
`;
const TextGreen = styled.View`
    color:#85B554;    
`;

const LocationEmployeeDetails = () => {
    const searchBar = useWithSearchBar();

    return (
        <ContainerView>
        <SearchBar {...searchBar.searchBinding} margin={8}/>
              <InnerView>
                <Avatar>
                    <ImageCircle resizeMode='cover' source={{uri: 'https://media.wired.com/photos/5f5fdba8af1c7b1f76a6a86b/master/w_2560%2Cc_limit/Culture_Pokemane_vtuber.jpg'}}/>
                </Avatar>      
                    <Text style={{paddingLeft:20}}>1004 Joseph Carrigan</Text>
                </InnerView>   
                <CardView>
                    <TextView>
                        <Text>Co-operative</Text>
                        <Text>8:05 AM</Text>
                    </TextView>
                    <Text>Notes</Text>
                </CardView>
                <CardView>
                    <Text>CLock-in is</Text>
                    <Text>Notes</Text>
                    <Text>I clocked in at</Text> 
                    <Text>Notes</Text> 
                </CardView>       
        </ContainerView>
    );
}

export default LocationEmployeeDetails;