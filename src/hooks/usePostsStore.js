import { useEffect, useState } from 'react';
import { postReq } from './../request';

export const usePostsStore = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postReq('/api/post/all')
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return [posts, setPosts];
};
