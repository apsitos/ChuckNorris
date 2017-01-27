import React from 'react';
require('./joke-style');  

const Jokes = (props) => {
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
