import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PostList from './../components/PostList';
import WithHeader from './../components/WithHeader';

const Home = props => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/post/all')
      .then(res => res.json())
      .then(posts => setPosts(posts))
      .catch(() => setError(true));
  }, []);

  if (error) return <Redirect to='/login' />;
  return <PostList posts={posts} />;
};

export default WithHeader(Home);
