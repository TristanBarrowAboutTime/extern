import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useWithSearchBar } from '../hooks/component-hooks/atomic-components/useSearchBar';
import { View, Text, TouchableOpacity } from 'react-native';
import UserImage, { MapEmployeeStatus } from '../components/cellular-components/map-list/UserImage';
import Tabs, { useWithTabs } from '../components/molecular-components/Tabs';
import styled from 'styled-components/native';
import Styles from '../style/Styles';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/atomic-components/SearchBar';
import ProfileImage from '../components/cellular-components/map-list/ProfileImage';

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
padding-left:20;
padding-right:20;
padding-top:20;
padding-bottom:20;
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
const TextView = styled.View`
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
const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

`;

const ImageCircle = styled.Image`
    width: 50;
    height: 50;
    border-radius: 75;   
`;
const Title = styled.Text`
    font-size: 20px;
`;

type BodyStyles = {
    isHorizontal: boolean
}

const TextGreen = styled.View`
    color:#85B554;    
`;

enum EmployeeMapTabs {
    DISCREPANCIES = 'Discrepancies',
    HISTORY = 'History',
    LOCATIONS = 'Locations',
    ASSETS = 'Assets',
    FORMS = 'Forms',
}


const EmployeeDetails = () => {
    const searchBar = useWithSearchBar();
    const tabs = useWithTabs({
        tabs: [
            EmployeeMapTabs.DISCREPANCIES,
            EmployeeMapTabs.HISTORY,
            EmployeeMapTabs.LOCATIONS,
            EmployeeMapTabs.ASSETS,
            EmployeeMapTabs.FORMS
        ],
        selected: EmployeeMapTabs.DISCREPANCIES
    });

    // type Employee = {
    //     code: number
    //     firstName: string
    //     lastName: string
    //     status: MapEmployeeStatus
    //     image: null | string
    // }

    // type EmployeeProps = {
    //     employee: Employee
    // }

    // const EmployeeTemplete = ({ employee }: EmployeeProps) => {
    //         const {
    //             code,
    //             firstName,
    //             lastName,
    //             status,
    //             image
    //         } = employee;


    return (
        <ContainerView >
            <SearchBar {...searchBar.searchBinding} margin={8} />
            <NavView >
                <TouchableOpacity>
                    <FontAwesomeIcon
                        size={16}
                        color={Styles.color.green}
                        icon={faChevronLeft}
                    />
                    <TextGreen>Back</TextGreen>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ paddingRight: 10 }}>
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
                    <ImageCircle resizeMode='cover' source={{ uri: 'https://media.wired.com/photos/5f5fdba8af1c7b1f76a6a86b/master/w_2560%2Cc_limit/Culture_Pokemane_vtuber.jpg' }} />
                </Avatar>
                <Text style={{ paddingLeft: 20 }}>1004 Joseph Carrigan</Text>
            </InnerView>

            <Tabs {...tabs.tabsBinding} />

            {tabs.selected === EmployeeMapTabs.DISCREPANCIES &&
                <>
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
                </>
            }
            {tabs.selected === EmployeeMapTabs.HISTORY &&
                <div>History</div>
            }
            {tabs.selected === EmployeeMapTabs.LOCATIONS &&
                <div>Locations</div>}
            {tabs.selected === EmployeeMapTabs.ASSETS &&
                <div>Assets</div>}
            {tabs.selected === EmployeeMapTabs.FORMS &&
                <div>Forms</div>}
        </ContainerView>
    )

}

export default EmployeeDetails;