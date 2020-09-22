import React, { useContext } from 'react';
import { UserContext } from './../App';
import Header from './../components/Header';
import PostList from './../components/PostList';

const Home = props => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Header username={user.name} />
      <PostList posts={props.posts} />
    </div>
  );
};

export default Home;
