import { useEffect, useState } from 'react';

export const useUser = () => {
  const [user, setUser] = useState({ isLoggedIn: false });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/user/')
      .then(res => res.json())
      .then(setUser)
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true));
  }, []);

  return { ...user, setUser, loaded };
};
