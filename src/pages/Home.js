import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './../hooks/useUser';
import Header from './../components/Header';
import Post from './../components/Post';

const Home = props => {
  const user = useUser();

  const posts = props.posts.map(post => (
    <Link className='link' to={`/post/${post.id}`} key={post.id}>
      <Post className='post' post={post} />
    </Link>
  ));

  if (!user.isLoggedIn) return <p>Loading...</p>;
  return (
    <div>
      <Header username={user.name} />
      <div>{posts}</div>
    </div>
  );
};

export default Home;
