import React from 'react';
import { useUser } from './../hooks/useUser';
import Header from './../components/Header';
import Post from './../components/Post';

const SinglePost = props => {
  const user = useUser();

  if (!user.isLoggedIn) return <p>Loading...</p>;
  return (
    <div>
      <Header username={user.name} />
      <div>
        <Post className='post static-post' post={props.post} />
      </div>
    </div>
  );
};

export default SinglePost;
