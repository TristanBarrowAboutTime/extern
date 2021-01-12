import * as React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View, Image,Text,TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Styles from '../CustomReportsPage/style/Styles';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import MapSearchbar from '../CustomReportsPage/components/atomic-components/MapSearchbar';
const Header = styled.View`
    display: flex;
    flex-direction: row;
`;

const ContainerView = styled.View`
width:400;
border-width:1;
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
`
;

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

const NavView = styled.View`
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

type BodyStyles = {
    isHorizontal: boolean
}

const TextGreen = styled.View`
    color:#85B554;    
`;

const Body = styled.View`
    display: flex;
    flex-direction: ${(props: BodyStyles) => props.isHorizontal ? 'row' : 'column'};
`;

export class EmployeeDetails extends React.Component {

render() {
return (
    <ContainerView>
       <MapSearchbar/>
        {/* Vector icon with a text 'Open in Time Editor' */}
        <NavView >
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

        )
    }
}
export default EmployeeDetails;