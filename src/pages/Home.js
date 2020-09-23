import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SiteContext } from './../App';
import PostList from './../components/PostList';
import WithHeader from './../components/WithHeader';

const Home = props => {
  const { postsStore } = useContext(SiteContext);
  const { posts, setPosts } = postsStore;
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/post/all')
      .then(res => res.json())
      .then(posts => setPosts(posts))
      .catch(() => setError(true));
  }, [setPosts]);

  if (error) return <Redirect to='/login' />;
  return <PostList posts={posts} />;
};

export default WithHeader(Home);
