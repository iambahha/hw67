import React from 'react';
import './Button.css';

const Button = props => (
  <button
    onClick={props.onClick}
    className='calc-button'
  >
    {props.value}
  </button>
);

export default Button;