import React from 'react';
import { withTranslation } from 'react-i18next';
import { BrowserRouter, Route } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import AppendBot from '../AppendBot';
import LoginForm from '../../forms/LoginForm';
import './index.scss';

const App = () => (
  <div className="root">
    <BrowserRouter>
      <Route exact path={ROUTES.INITIAL} component={AppendBot} />
      <Route path={ROUTES.LOGIN} component={LoginForm} />
    </BrowserRouter>
  </div>
);

export default withTranslation()(App);
