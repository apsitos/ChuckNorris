import React from 'react';
import './button-style';

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick()}>{props.name}</button>
  );
}

export default Button;
