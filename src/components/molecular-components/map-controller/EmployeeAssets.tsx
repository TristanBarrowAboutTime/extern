import * as React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useWithSearchBar } from '../../../hooks/component-hooks/atomic-components/useSearchBar';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Styles from '../../../style/Styles';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../atomic-components/SearchBar';
 
const ContainerView = styled.View`
    display: flex;
    width: 400;
    border-color: '#ddd';
    padding-left: 20;
    padding-right: 20;
    padding-top: 20;
    padding-bottom: 20;
`;

const CardView = styled.View`
    padding-left: 10;
    padding-right: 10;
    padding-top: 10;
    padding-bottom: 10;
    margin-top: 10;
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

const TextGreen = styled.View`
    color:#85B554;    
`;

const EmployeeAssets = () => {
    const searchBar = useWithSearchBar();

    return (
        <ContainerView>
        <SearchBar {...searchBar.searchBinding} margin={8}/>
        {/* Vector icon with a text 'Open in Time Editor' */}
        <NavView>
            <TouchableOpacity>
                <FontAwesomeIcon
                    size={16}
                    color={Styles.color.green}
                    icon={faChevronLeft}
                />
                <TextGreen>Back</TextGreen>
            </TouchableOpacity>
        <View style={{ flexDirection:'row'}}>
            <TouchableOpacity  style={{paddingRight:10}}>
                <FontAwesomeIcon
                    size={16}
                    color={Styles.color.green}
                    icon={faChevronLeft}
                />
                <TextGreen>Prev</TextGreen>
            </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesomeIcon
                size={16} 
                color={Styles.color.green}
                icon={faChevronRight}
                />
                <TextGreen>Next</TextGreen>
            </TouchableOpacity>
        </View>
        </NavView>
        
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
    )
}

export default EmployeeAssets