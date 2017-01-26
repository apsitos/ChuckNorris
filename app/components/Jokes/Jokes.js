import React from 'react';

const Joke = (props) => {
  let funnies = props.jokeArray.map((singleJoke) => {console.log(props.jokeArray);})
  return(
    <div>
      {funnies}
    </div>
  )
}

export default Joke;
