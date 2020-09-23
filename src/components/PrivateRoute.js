import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUser } from './../hooks/useUser';
import Loader from './../components/Loader';
import Header from './Header';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, loaded] = useUser();

  if (!loaded) return <Loader />;
  return (
    <Route
      {...rest}
      render={props =>
        user.isLoggedIn ? (
          <div>
            <Header {...props} user={user} />
            <Component {...props} user={user} />
          </div>
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default PrivateRoute;
