import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
  </Switch>
);

export default Routes;
