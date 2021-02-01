import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CustomReportsPage from '../pages/CustomReportsPage';
import MapsPage from '../pages/MapsPage';
import styled from 'styled-components';
import RequestPage from '../pages/RequestPage';
import AssetListTemplate from '../components/molecular-components/templates/AssetListTemplate';

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
        <NavLink to="/custom-reports">Custom Reports</NavLink>
        <NavLink to="/req">Request</NavLink>
   
      </NavBar>
      
      <Switch>
        <Route path='/custom-reports'>
          <CustomReportsPage />
        </Route>
        <Route path='/map-page'>
            <MapsPage /> 
        </Route>
        <Route path='/req'>
            <RequestPage /> 
        </Route>   
        <Route path='/temp-page'>
          <AssetListTemplate
          showNoActivity = {false}
          assets = {{
            assetsCode : 'SP-WM-07',
            assetsFirstName: 'Miller',
            assetsLastName: 'Big Blue',
            employeeCode: 1002,
            employeeFirstName:'Joseph',
            employeeLastName: 'Carrigan',
            address:'1345 Erda Water' ,
            image: null 
          }} />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
