import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import LoginPage from '../../pages/LoginPage';
import SocialsPage from '../../pages/SocialsPage';
import AppendBot from '../AppendBot';
import LoginForm from '../../forms/LoginForm';
import Game from '../../pages/Game';
import './index.scss';

const App = () => (
  <div className="root">
    <BrowserRouter>
      <Route exact path={ROUTES.INITIAL} component={AppendBot} />
      <Route path={ROUTES.LOGIN} component={LoginForm} />
      <Route path={ROUTES.GAME} component={Game} />
      <Route path={ROUTES.LOGIN} component={LoginPage} />
      <Route path={ROUTES.SOCIALS} component={SocialsPage} />
    </BrowserRouter>
  </div>
);

export default App;
