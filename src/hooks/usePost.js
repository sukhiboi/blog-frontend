import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const usePost = () => {
  const [post, setPost] = useState({ isLoaded: false });
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/post/${id}`)
      .then(res => res.json())
      .then(post => setPost({ ...post, isLoaded: true }))
      .catch(() => setError(true));
  }, [id]);

  return [post, error];
};
