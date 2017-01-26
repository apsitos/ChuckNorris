import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main/Main';
import {Initial} from './components/Initial/Initial';
import Joke from './components/Jokes/Jokes';
// import Settings from './components/Settings/Settings';
// import Favorites from './components/Favorites/Favorites';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';


render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/jokes" component={Joke} />
        {/* <IndexRoute component={Joke} /> */}
      {/* <Route path="/settings" component={Settings} /> */}
      {/* <Route path="/favorites" component={Favorites} /> */}
    </Route>
  </Router>
  , document.getElementById('application'));
