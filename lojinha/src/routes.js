import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../src/pages/Main';
import Detalhe from '../src/pages/Detalhes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/stores/:id" component={Detalhe}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;