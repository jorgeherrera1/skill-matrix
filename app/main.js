import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import App from './containers/app';
import './styles/main.css';

const store = configureStore();
const appElement = document.getElementById('skill-matrix-app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  appElement
);
