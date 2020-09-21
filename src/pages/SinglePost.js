import React from 'react';
import { useHistory } from 'react-router-dom';
import Post from './../components/Post';

const SinglePost = props => {
  const history = useHistory();
  return (
    <div>
      <button onClick={history.goBack}>Go Back</button>
      <div>
        <Post post={props.post} />
      </div>
    </div>
  );
};

export default SinglePost;
