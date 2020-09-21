import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const useUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({ isLoggedIn: false });

  useEffect(() => {
    fetch('/user')
      .then(async res => {
        const { name, avatar_url, bio } = await res.json();
        return setUser({ name, avatar_url, bio, isLoggedIn: true });
      })
      .catch(() => history.push('/login'));
  }, [history]);
  
  return user;
};
