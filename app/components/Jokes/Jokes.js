import React from 'react';
require('./joke-style');

const Jokes = (props) => {
  //bring jokeArray down as a prop from state above = use React.cloneElement?
  // <Joke handleClick = props.handleClick />
  return(
    <div>
      <h2 id='display'>{props.jokeArray}</h2>
    </div>
  )
}

export default Jokes;
