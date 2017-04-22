import '../styles/main.scss';

import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import Root from './containers/root';
import initialState from './test-data';

const middleware = applyMiddleware(logger);

const store = createStore(reducers, initialState, middleware);

render(
  <Root store={store} />,
  document.getElementById('skill-matrix-app')
);
