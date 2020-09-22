import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = props => {
  return (
    <div className='header'>
      <div className='vertical-center'>
        <Link className='link' to='/'>
          <span className='app-title'>Blog</span>
        </Link>
      </div>
      <div className='user-actions'>
        <div className='vertical-center'>{props.username}</div>
        <div className='vertical-center'>
          <a className='link' href={process.env.REACT_APP_LOGOUT_REDIRECT}>
            <Button text='Logout' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
