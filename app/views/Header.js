import React from 'react';
import { Link } from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import LoggedUser from './header/LoggedUser';
import MainNavigation from './header/MainNavigation';
import AppBrand from './header/AppBrand';

const constants = {
    titleOption: 'Listing App',
    usernameOption: 'Username',
    logoutOption: 'Log Out'
};

export default class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <AppBrand title={constants.titleOption}></AppBrand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <MainNavigation></MainNavigation>
          <LoggedUser></LoggedUser>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
/*      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            </ul>
          </div>
        </div>
      </nav>*/
