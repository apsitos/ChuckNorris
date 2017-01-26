import React from 'react';

const Joke = (props) => {
  // console.log(props.jokeArray);
  let funnies = props.jokeArray.map((singleJoke) => {return singleJoke})
  return(
    <div>
      {funnies}
    </div>
  )
}

export default Joke;
