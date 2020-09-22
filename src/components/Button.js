import React from 'react';

const Button = pros => {
  return <button className='btn' onClick={pros.onClick}>{pros.text}</button>;
};

export default Button;
