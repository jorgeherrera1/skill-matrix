import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import App from './app';

const Root = ({history, store}) => (
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
    </LocaleProvider>
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
