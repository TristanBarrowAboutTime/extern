import * as React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useWithSearchBar } from '../hooks/component-hooks/atomic-components/useSearchBar';
import { View, Image,Text,TouchableOpacity } from 'react-native';
import Tabs, { useWithTabs } from '../components/molecular-components/Tabs';
import { employeeLocationData } from '../mock-data/employeeMapData';
import SortableList from '../components/molecular-components/SortableList';
import MapsEmployees from '../components/molecular-components/maps/MapsEmployees';
import styled from 'styled-components/native';
import Styles from '../style/Styles';
import EmployeeLocation from './Location';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import EmployeeLocationTemplate from '../components/cellular-components/map-list/LocationTemplate';
import SearchBar from '../components/atomic-components/SearchBar';
 
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

type LocationType = {
    code: number
    name: string
    site: string
}
enum LocationMapTabs {
    EMPLOYEE = 'Employee',
    FORMS = 'Forms',
    ASSETS = 'Assets'
}


const LocationEmployeeDetails = () => {
    const searchBar = useWithSearchBar();
    const tabs = useWithTabs({
        tabs: [
            LocationMapTabs.EMPLOYEE,
            LocationMapTabs.FORMS,
            LocationMapTabs.ASSETS
        ], 
        selected: LocationMapTabs.EMPLOYEE
    });
return (
    <ContainerView>
       <SearchBar {...searchBar.searchBinding} margin={8}/>
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
            <ImageCircle resizeMode='cover' 
            source={{uri: 'https://media.wired.com/photos/5f5fdba8af1c7b1f76a6a86b/master/w_2560%2Cc_limit/Culture_Pokemane_vtuber.jpg'}}/>
            </Avatar>      
            <Text style={{paddingLeft:20}}>1004 Joseph Carrigan</Text>
            </InnerView>  
            <Tabs {...tabs.tabsBinding}/>
            <SortableList
                data={employeeLocationData}
                template={(employee: LocationType) => <EmployeeLocationTemplate employee={employee} />}
                sortables={{
                    code: { title: 'Code', sort: (a: LocationType, b: LocationType) => (a.code > b.code ? -1 : 1) },
                    name: { title: ' Name', sort: (a: LocationType, b:LocationType) => (a.name > b.name ? -1 : 1) },
                    site: { title: ' site status', sort: (a: LocationType, b:LocationType) => (a.site > b.site ? -1 : 1) },
                   
             }}
                shouldDisplayItem={(item: LocationType) => item.name.includes(searchBar.value)}
            />
            {tabs.selected === LocationMapTabs.EMPLOYEE && 
            <>
             {/* <CardView>
             <TextView>
              <Text>Employee location details view</Text>
              <Text>Employee location details view-8:05 AM</Text>
              </TextView>
              <Text>Notes</Text>
              </CardView>
              <CardView>
              <Text>CLock-in is</Text>
              <Text>Notes</Text>
              <Text>I clocked in at</Text> 
              <Text>Notes</Text> 
              </CardView>   */}
              </>  
                }
            
            {tabs.selected === LocationMapTabs.ASSETS && 
                <div>Assets</div>}
            {tabs.selected === LocationMapTabs.FORMS && 
               <div>Forms</div> }

               
        </ContainerView>

        )
    }
export default LocationEmployeeDetails;