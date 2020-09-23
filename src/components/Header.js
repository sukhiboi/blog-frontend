import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SiteContext } from '../App';
import Button from './Button';

const Header = props => {
  const { user } = useContext(SiteContext);
  const { details, setUser } = user;

  const logout = () => {
    fetch('/api/user/logout')
      .then(res => res.json())
      .then(setUser);
  };

  return (
    <div className='header'>
      <div className='vertical-center'>
        <Link className='link' to='/'>
          <span className='app-title'>Blog</span>
        </Link>
      </div>
      <div className='user-actions'>
        <div className='vertical-center'>{details.name}</div>
        <div className='vertical-center'>
          <Link className='link' to='/new-post'>
            <Button text='New' />
          </Link>
        </div>
        <div className='vertical-center'>
          <Button text='Logout' onClick={logout} />
        </div>
      </div>
    </div>
  );
};

export default Header;
