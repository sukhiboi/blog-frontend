import React from 'react';
import Button from './../components/Button';

const Login = props => {
  return (
    <div className='vertical-center full-height'>
      <span className='app-title'>Welcome to Blog</span>
      <a className='link login-btn' href={process.env.REACT_APP_LOGIN_REDIRECT}>
        <Button text='Login with Github' />
      </a>
    </div>
  );
};

export default Login;
