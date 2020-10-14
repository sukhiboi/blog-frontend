import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PostList from './../components/PostList';
import WithHeader from './../components/WithHeader';
import WithAuth from './../components/WithAuth';
import { useTitle } from '../hooks/useTitle';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { postReq } from './../request';

const HomeLayout = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`;

const Home = props => {
  useTitle('Home');
  const [posts, setPosts] = props.postsStore;
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    postReq('/api/post/all', { search })
      .then(res => res.json())
      .then(setPosts)
      .catch(() => setError(true));
  }, [setPosts, search]);

  if (error) return <Redirect to='/login' />;
  return (
    <HomeLayout>
      <PostList posts={posts} />
      <SearchBar placeholder='Search by Title' onChange={setSearch} />
    </HomeLayout>
  );
};

export default WithAuth(WithHeader(Home));
