import React, { useContext } from 'react';
import { UserContext } from './../App';
import Header from './../components/Header';
import Post from './../components/Post';

const SinglePost = props => {
  const { user } = useContext(UserContext);
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
