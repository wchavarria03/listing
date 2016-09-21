import React, { PropTypes } from 'react';

import Header from './Header';


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
