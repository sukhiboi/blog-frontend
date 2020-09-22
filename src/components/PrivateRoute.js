import React, { useEffect, useContext, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from './../App';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const { user, setUser } = useContext(UserContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(setUser)
      .then(() => setIsLoaded(true))
      .catch(() => setIsLoaded(true));
  }, []);

  if (!isLoaded) return <p>Loading...</p>;
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
