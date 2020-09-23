import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useProfile = () => {
  const [profile, setProfile] = useState({ isLoaded: false });
  const { username } = useParams();

  useEffect(() => {
    fetch(`/api/user/profile/${username}`)
      .then(res => res.json())
      .then(profile => setProfile({ ...profile, isLoaded: true }));
  }, [username]);
  return profile;
};
