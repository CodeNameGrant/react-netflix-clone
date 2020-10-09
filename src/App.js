import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signup, Signin } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.BROWSE} component={Browse} />
        <Route path={ROUTES.SIGNUP} component={Signup} />
        <Route path={ROUTES.SIGNIN} component={Signin} />
        
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </Router>
  );
}

export default App;