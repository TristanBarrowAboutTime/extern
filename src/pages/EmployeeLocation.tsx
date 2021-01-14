import * as React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useWithSearchBar } from '../hooks/component-hooks/atomic-components/useSearchBar';
import { View, Image,Text,TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Styles from '../style/Styles';
import SortableList from '../components/molecular-components/SortableList';
import { employeeLocationData } from '../mock-data/employeeMapData';
import MapEmployeeListTemplate, { ListEmployee } from '../components/cellular-components/map-list/EmployeeListTemplate';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/atomic-components/SearchBar';
import EmployeeLocationTemplate from '../components/cellular-components/map-list/EmployeeLocationTemplate';
import MapsEmployees from '../components/molecular-components/maps/MapsEmployees';



type EmployeeLocationType = {
    code: number
    name: string
    siteName: string
}

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

type EmployeeLocationProps = {
    searchValue: string 
}

const EmployeeLocation = (props:EmployeeLocationProps ) => {
    const searchBar = useWithSearchBar();

    return (
        <ContainerView>
            <Text>Active job: 4</Text>
        <SortableList
                data={employeeLocationData}
                template={(employee: EmployeeLocationType) => <EmployeeLocationTemplate employee={employee} />}
                sortables={{
                    code: { title: 'Code', sort: (a: EmployeeLocationType, b: EmployeeLocationType) => (a.code > b.code ? -1 : 1) },
                    name: { title: ' Name', sort: (a: EmployeeLocationType, b:EmployeeLocationType) => (a.name > b.name ? -1 : 1) },
                   
             }}
                shouldDisplayItem={(item: EmployeeLocationType) => item.name.includes(props.searchValue)}
            />
        
        </ContainerView>
    )
}
export default EmployeeLocation;