import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main/Main';
import {Initial} from './components/Initial/Initial';
import Joke from './components/Jokes/Jokes';
// import Settings from './components/Settings/Settings';
// import Favorites from './components/Favorites/Favorites';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';


render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Initial}/>
      <Route component={Initial}/>
      <Route path="/jokes" component={Joke} />
        {/* <IndexRoute component={Joke} /> */}
      {/* <Route path="/settings" component={Settings} /> */}
      {/* <Route path="/favorites" component={Favorites} /> */}
    </Route>
  </Router>
  , document.getElementById('application'));
