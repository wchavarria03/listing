import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class MainNavigation extends React.Component {
  render() {
    return(
      <Nav>
        <NavItem href="#">Dashboard</NavItem>
        <NavItem href="#">TODOs</NavItem>
        <NavItem href="#">Profile</NavItem>
      </Nav>
    );
  }
}
