import React, { PropTypes } from 'react';

import Header from './header/Header';


class MasterPage extends React.Component {
  render () {
    return (
      <div>
        <Header></Header>
        {this.props.children}
      </div>
    )
  }
}

export default MasterPage;
