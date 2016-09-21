import React, { PropTypes } from 'react';

class TodoListItem extends React.Component {
  render () {
    return (<h3>{this.props.todo}</h3>)
  }
}

export default TodoListItem;
