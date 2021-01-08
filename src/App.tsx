import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CustomReportsPage from './CustomReportsPage/components/CustomReportsPage';
import MapBox from './mapbox-maps/MapPage';
import LeafletMap from './leaflet-maps/MapPage';
import styled from 'styled-components';
import SortableList from './generic-components/SortableLIst';

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 34px;
  background-color: lightgrey;
`;

const NavLink = styled(Link)`
  font-weight: 900;
  text-decoration: none;
  color: black;
  transition: all .2s;
  :hover {
    cursor: pointer;
    color: gray;
  }
`;

type Imployee = {
  id: number
  firstName: string
  lastName: string
}


const ImployeeContainer = styled.div`
  display: flex;
  flex-direction: row;

`;

const ImployeeListItem = (props: {item: Imployee}) => {
  return (
    <ImployeeContainer>
      <div>{props.item.id}</div>
      <div>{props.item.firstName}</div>
      <div>{props.item.lastName}</div>
    </ImployeeContainer>
  );
}

const imployeeData: Imployee[] = [
  {id: 1, firstName: 'A', lastName: 'x'},
  {id: 2, firstName: 'b', lastName: 'y'},
  {id: 3, firstName: 'd', lastName: 'z'},
  {id: 4, firstName: 'c', lastName: 'Q'},
  {id: 5, firstName: 'E', lastName: 'B'},
  {id: 6, firstName: 'F', lastName: 'F'},
];



function App() {
  return (
    <Router>
      <NavBar>
        <NavLink to="/map-list">Map List</NavLink>
        <NavLink to="/mapbox">Mapbox Demo</NavLink>
        <NavLink to="/leaflet">Leaflet Demo</NavLink>
        <NavLink to="/custom-reports">Custom Reports</NavLink>
      </NavBar>
      
      <Switch>
        <Route path='/mapbox'>
          <MapBox />
        </Route>
        <Route path='/leaflet'>
          <LeafletMap />
        </Route>
        <Route path='/custom-reports'>
          <CustomReportsPage />
        </Route>
        <Route path='/map-list'>
          <SortableList
            data={imployeeData}
            sortables={{
              id: 'Code',
              firstName: 'First Name', 
              lastName: 'Last Name'
            }}
            shouldDisplayItem={item => true}
            template={(item) => <ImployeeListItem item={item} />}
            sortBy={{
              id: (a:Imployee, b:Imployee) => (a.id > b.id ? -1 : 1),
              firstName: (a: Imployee, b: Imployee) => (a.firstName.toLowerCase() > b.firstName.toLowerCase() ? -1 : 1),
              lastName: (a: Imployee, b: Imployee) => (a.lastName.toLowerCase() > b.lastName.toLowerCase() ? -1 : 1),
            }}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
