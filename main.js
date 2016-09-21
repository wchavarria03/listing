import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import MasterPage from './app/views/MasterPage';
import Dashboard from './app/views/dashboard/Dashboard';

//ReactDOM.render(<MasterPage></MasterPage>, document.getElementById('app'));

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={MasterPage}>
      <IndexRoute component={Dashboard}> </IndexRoute>
    </Route>
  </Router>,
  document.getElementById('app')
);
