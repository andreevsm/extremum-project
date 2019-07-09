import React from 'react';
import ReactDOM from 'react-dom';

import './services/i18next';
import './index.scss';
import App from './containers/layouts/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App useSuspense={false} />,
  document.getElementById('root'),
);

serviceWorker.unregister();
