import { useEffect, useState } from 'react';

export const usePostsStore = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/post/all')
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return [posts, setPosts];
};
