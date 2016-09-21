import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';

export default class AppBrand extends React.Component {
  render() {
    return (
      <Navbar.Brand>
        <a href="#">{this.props.title}</a>
      </Navbar.Brand>
    );
  }
}
