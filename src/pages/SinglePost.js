import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from './../hooks/useUser';
import { BiArrowBack } from 'react-icons/bi';
import Post from './../components/Post';

const SinglePost = props => {
  const user = useUser();
  const history = useHistory();

  if (!user.name) return <p>Loading...</p>;
  return (
    <div>
      Logged In user {`${user.name}`}
      <div>
        <BiArrowBack className='icon' onClick={history.goBack} />
        <div>
          <Post className='post static-post' post={props.post} />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
