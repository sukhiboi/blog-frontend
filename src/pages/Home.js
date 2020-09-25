import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SiteContext } from './../App';
import PostList from './../components/PostList';
import WithHeader from './../components/WithHeader';
import WithAuth from './../components/WithAuth';
import { useTitle } from '../hooks/useTitle';

const Home = props => {
  useTitle('Home');
  const { postsStore } = useContext(SiteContext);
  const { posts, setPosts } = postsStore;
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/post/all')
      .then(res => res.json())
      .then(setPosts)
      .catch(() => setError(true));
  }, [setPosts]);

  if (error) return <Redirect to='/login' />;
  return <PostList posts={posts} />;
};

export default WithAuth(WithHeader(Home));
