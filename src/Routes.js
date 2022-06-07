import React from 'react';
import Home from './pages/Home';
import Play from './pages/Play';
import Page404 from './pages/Page404';

import { Button } from './components/Button'

import { Switch, Route } from 'react-router-dom';


export default () => {
  const Pagina404 = () => (
   <Page404 />
  )

  return (
    <Switch >
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/play">
        <Play />
      </Route>

      <Route component={Pagina404} />
    </Switch >
  );
}


