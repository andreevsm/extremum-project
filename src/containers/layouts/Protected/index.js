import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { cookies } from '../../../constants';

const ProtectedRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      localStorage.getItem(cookies.user)
        ? <Redirect to="/socials" />
        : <Component {...props} />
    )}
  />
);

export default ProtectedRoute;
