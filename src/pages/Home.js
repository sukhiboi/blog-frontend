import React from 'react';
import Post from './../components/Post';

const Home = props => {
  const posts = props.posts.map(post => <Post post={post} key={post.id} />);
  return <div>{posts}</div>;
};

export default Home;
