import React from 'react';
import { Link } from 'react-router-dom';
import Post from './../components/Post';

const Home = props => {
  const posts = props.posts.map(post => (
    <Link className='link' to={`/post/${post.id}`} key={post.id}>
      <Post className='post' post={post} />
    </Link>
  ));
  return <div>{posts}</div>;
};

export default Home;
