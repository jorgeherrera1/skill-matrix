import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import SearchContainer from './components/search-container';

let store = createStore(reducers);

render(
  <Provider store={store}>
    <SearchContainer />
  </Provider>,
  document.getElementById('skill-matrix-app')
);
