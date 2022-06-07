import React from 'react';
import Home from './pages/Home';
import Games from './pages/Games';
import Page404 from './pages/Page404';
import Game1 from './pages/Game1';
import Game2 from './pages/Game2';

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
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/games">
        <Games />
      </Route>
      <Route exact path="/game1">
        <Game1 />
      </Route>
      <Route exact path="/game2">
        <Game2 />
      </Route>
      <Route component={Pagina404} />
    </Switch >
  );
}


