import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './services/i18next';
import './index.scss';
import App from './containers/layouts/App';
import configureStore from './modules/configureStore';

ReactDOM.render(
  <Provider store={configureStore}>
    <App useSuspense={false} />
  </Provider>,
  document.getElementById('root'),
);
