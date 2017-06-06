import React from 'react';
import {render} from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import logger from 'redux-logger';
import reducers from './reducers';
import Root from './containers/root';
import '../styles/main.scss';

const history = createHistory();
const store = createStore(
  reducers,
  applyMiddleware(logger, routerMiddleware(history))
);

render(
  <Root history={history} store={store} />,
  document.getElementById('skill-matrix-app')
);
