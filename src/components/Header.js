import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { SiteContext } from '../App';
import Button from './Button';

const Avatar = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  overflow: hidden;
`;

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
          <Avatar
            src={details.img_url}
            alt={details.user_name}
            onClick={() => history.push(`/profile/${details.user_name}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
