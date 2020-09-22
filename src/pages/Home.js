import React, { useEffect, useState } from 'react';
import Header from './../components/Header';
import PostList from './../components/PostList';

const Home = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/post/all')
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      <Header username={props.user.name} />
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
