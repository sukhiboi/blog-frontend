import React, { useEffect, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from './../App';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetch('/user')
      .then(res => res.json())
      .then(setUser);
  }, []);

  if (!user.isLoaded) return <p>Loading...</p>;
  return (
    <Route
      {...routeProps}
      render={() =>
        user.isLoggedIn ? <Component user={user} /> : <Redirect to='/login' />
      }
    />
  );
};

export default PrivateRoute;
