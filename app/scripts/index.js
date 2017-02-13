import '../styles/main.scss';

import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import reducers from './reducers';
import Root from './containers/root';

let initialState = {
  allSkills: ['Java', 'JavaScript']
};

let store = createStore(reducers, initialState);

render(
  <Root store={store} />,
  document.getElementById('skill-matrix-app')
);
