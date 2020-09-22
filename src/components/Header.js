import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = props => {
  const logout = () => {
    console.log('logout');
  };

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
          <Button onClick={logout} text='Logout' />
        </div>
      </div>
    </div>
  );
};

export default Header;
