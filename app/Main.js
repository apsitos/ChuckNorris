import React from 'react';
import Header from './components/Header/Header';
// import Random from './components/Random/Random'
import Button from './components/Button/Button';
// import Jokes from './components/Jokes/Jokes';
require('./styles');

export default class Main extends React.Component {
  render() {
    return(
      <div>
        <Header />
        {/* <Random /> */}
        <Button />
      </div>
    )
  }
 }
