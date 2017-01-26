import React from 'react';
import Joke from './Joke';
require('./joke-style');

const Jokes = (props) => {
  // <Joke handleClick = props.handleClick />
  return(
    <div>
      {props.jokeArray}
      <Joke />
    </div>
  )
}

export default Jokes;
