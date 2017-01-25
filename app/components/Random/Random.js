import React from 'react';
import './random-style';

const Random = (props) => {
  return (
    <div id='random'>
      {props.joke}
    </div>
  )
}

export default Random;
