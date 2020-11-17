import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        return !user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: loggedInPath,
            }}
          />
        );
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: 'signin',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
