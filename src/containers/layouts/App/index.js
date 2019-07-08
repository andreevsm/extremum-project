import React from 'react';
import { withTranslation } from 'react-i18next';

import logo from '../../../assets/images/logo.svg';
import './index.scss';

function App({ t }) {
  return (
    <div className="App">
      {t('Send nickname')}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withTranslation()(App);
