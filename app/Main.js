import React from 'react';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
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
        <
        <Jokes />
      </div>
    )
  }

}
