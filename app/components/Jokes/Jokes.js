import React from 'react';
// import Joke from './Joke';
require('./joke-style');  

const Jokes = (props) => {
  // <Joke handleClick = props.handleClick />
  const allJokes = props.jokeArray.map((jokeObj) =>
    <div className="favorites"
      id="display"
      key={jokeObj.id}>
      {jokeObj.joke}
    </div>)

  return(
    <div className='cards'>
      {allJokes}
    </div>
  )
}

export default Jokes;
