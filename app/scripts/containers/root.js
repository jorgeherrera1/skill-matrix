import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router-dom';
import App from './app';

const Root = ({history, store}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={App}/>
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
