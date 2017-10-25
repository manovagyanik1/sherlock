import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { reduxReducers } from './reducers/index';
import { reduxMiddleware } from './utils/middleware';

import Base from './components/base/base';
import Home from './pages/home/home';
import Tasker from './pages/tasker/tasker';
import Asker from './pages/asker/asker';
import NotFound from './pages/notFound/notFound';

const store = reduxMiddleware.createStore(reduxReducers);

if ( process.env.NODE_ENV !== 'production' ) {
  window.React = React;
}

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ reduxMiddleware.history }>
      <Route path="/" component={ Base }>
        <IndexRoute component={ Home } />
        <Route path="tasker" component={ Tasker } />
        <Route path="asker" component={ Asker } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
