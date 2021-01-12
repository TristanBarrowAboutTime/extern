import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CustomReportsPage from '../pages/CustomReportsPage';
import MapBox from './cellular-components/mapbox-maps/MapPage';
import LeafletMap from './cellular-components/leaflet-maps/MapPage';
import MapsPage from '../pages/MapsPage';
import styled from 'styled-components';

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

function AppRouter() {
  return (
    <Router>
      <NavBar>
        <NavLink to="/map-page">Map Page</NavLink>
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
        <Route path='/map-page'>
            <MapsPage /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
