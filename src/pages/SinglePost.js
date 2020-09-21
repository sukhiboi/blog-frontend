import React from 'react';
import { useHistory } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Post from './../components/Post';

const SinglePost = props => {
  const history = useHistory();
  return (
    <div>
      <BiArrowBack className='icon' onClick={history.goBack} />
      <div>
        <Post className='post static-post' post={props.post} />
      </div>
    </div>
  );
};

export default SinglePost;
