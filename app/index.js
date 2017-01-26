import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main/Main';
import {Initial} from './components/Initial/Initial';
import Jokes from './components/Jokes/Jokes';
// import Settings from './components/Settings/Settings';
// import Favorites from './components/Favorites/Favorites';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

{/* <Route path="/favorites" component={Favorites} /> */}

{/* <IndexRoute component={Joke} /> */}


render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Initial} />
      <Route path="/jokes" component={Jokes} />
      <Route path="/settings" component={Settings} />
    </Route>
  </Router>
  , document.getElementById('application'));
