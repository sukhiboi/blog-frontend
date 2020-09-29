import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { usePost } from '../hooks/usePost';
import { BiTrash } from 'react-icons/bi';
import Post from './../components/Post';
import Confirm from '../components/Confirm';
import Loader from './../components/Loader';
import WithHeader from './../components/WithHeader';
import WithAuth from './../components/WithAuth';
import { postReq } from './../request';
import { useTitle } from '../hooks/useTitle';

const SinglePost = props => {
  const [post, error] = usePost();
  useTitle(post.title);
  const [isShown, setIsShown] = useState(false);
  const toggleConfirm = () => setIsShown(isShown => !isShown);

  const history = useHistory();
  const deletePost = () => {
    const id = post.id;
    postReq('/api/post/delete-post', { id }).then(() => history.push('/'));
  };

  if (error) return <Redirect to='/login' />;
  if (!post.isLoaded) return <Loader />;

  const deleteButton = (
    <BiTrash
      className='post-action-icon btn'
      onClick={toggleConfirm}
      size='1.2rem'
    />
  );
  const confirmBox = (
    <Confirm
      onNo={toggleConfirm}
      onYes={deletePost}
      text='Are you sure you want to delete this post?'
    />
  );
  return (
    <div>
      {isShown ? confirmBox : <></>}
      <div className='static-post'>
        {post.user_id === props.user.user_id ? deleteButton : <></>}
        <Post className='single-post' post={post} static={true} />
        <Link className='link back-to-home-link' to='/'>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default WithAuth(WithHeader(SinglePost));
