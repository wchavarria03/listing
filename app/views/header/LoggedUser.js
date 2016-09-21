import React from 'react';
import Link from 'react-bootstrap/lib/Button';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class LoggedUser extends React.Component {
  render() {
    return (
      <Nav pullRight>
        <NavItem eventKey={1} href="#">User Name</NavItem>
        <NavItem eventKey={2} href="#">Log Out</NavItem>
      </Nav>
    );
  }
}
