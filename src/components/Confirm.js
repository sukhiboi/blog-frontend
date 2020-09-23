import React from 'react';
import Button from './Button';
import './../styles/confirm.css';

const Confirm = props => {
  return (
    <div className='confirm'>
      <div className='text'>{props.text}</div>
      <div className='action-btn'>
        <Button text='No' onClick={props.onNo} />
        <Button text='Yes' onClick={props.onYes} />
      </div>
    </div>
  );
};

export default Confirm;
