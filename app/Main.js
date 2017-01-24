import React from 'react';
import Header from './components/Header/Header';
import Random from './components/Random/Random'
import Jokes from './components/Jokes/Jokes';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <Header />
        <Random />
        <Jokes />
      </div>
    )
  }

}
