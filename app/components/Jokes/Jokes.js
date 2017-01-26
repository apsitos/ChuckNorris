import React from 'react';
import Joke from './Joke';
require('./joke-style');

const Jokes = (props) => {
  {props.jokeArray}
  // <Joke handleClick = props.handleClick />
  return(
    <div>
      <Joke />
    </div>
  )
}

export default Jokes;
