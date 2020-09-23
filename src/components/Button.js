import React from 'react';

const Button = props => {
  const className = `btn ${props.className}`;
  return (
    <button className={className} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
