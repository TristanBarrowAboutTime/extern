import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CustomReportsPage from '../pages/CustomReportsPage';
import styled from 'styled-components';
import RequestPage from '../pages/RequestPage';
import GridPage from '../pages/GridPage';
import DevicesPage from '../pages/DevicesPage';

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
        <NavLink to="/custom-reports">Custom Reports</NavLink>
        <NavLink to="/devices">Devices</NavLink>
        <NavLink to="/grid">Grid Page</NavLink>
      </NavBar>
      
      <Switch>
        <Route path='/custom-reports'>
          <CustomReportsPage />
        </Route>
        <Route path='/devices'>
          <DevicesPage />
        </Route>
        <Route path='/grid'>
          <GridPage />
        </Route>
        <Route path='/req'>
            <RequestPage />
        </Route>   
      </Switch>
    </Router>
  );
}

export default AppRouter;
