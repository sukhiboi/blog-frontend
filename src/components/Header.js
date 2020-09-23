import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SiteContext } from '../App';
import Button from './Button';

const Header = props => {
  const { user } = useContext(SiteContext);
  const { details, setUser } = user;
  const history = useHistory();

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
        <div className='vertical-center'>
          <Link className='link' to='/new-post'>
            <Button text='New Post' />
          </Link>
        </div>
        <div className='vertical-center'>
          <Button text='Logout' onClick={logout} />
        </div>
        <div className='vertical-center'>
          <div className='small-avatar avatar'>
            <img
              src={details.imgURL}
              alt={details.name}
              onClick={() => history.push(`/profile/${details.name}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
