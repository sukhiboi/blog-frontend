import React from 'react';
import { Redirect } from 'react-router-dom';

const WithAuth = Component => {
  return props => {
    if (props.user.isLoggedIn) return <Component />;
    return <Redirect to='/login' />;
  };
};

export default WithAuth;
