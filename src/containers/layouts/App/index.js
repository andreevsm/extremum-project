import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import LoginPage from '../../pages/LoginPage';
import SocialsPage from '../../pages/SocialsPage';
import AppendBot from '../../pages/AddBot';
import Game from '../../pages/Game';
import ProtectedRoute from '../Protected';
import './index.scss';

const App = () => (
  <BrowserRouter>
    <Route exact path={ROUTES.INITIAL} component={AppendBot} />
    <ProtectedRoute path={ROUTES.LOGIN} component={LoginPage} />
    <Route path={ROUTES.GAME} component={Game} />
    <Route path={ROUTES.SOCIALS} component={SocialsPage} />
  </BrowserRouter>
);

export default App;
