import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import TodoList from '../TodoList';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/todo" component={TodoList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
