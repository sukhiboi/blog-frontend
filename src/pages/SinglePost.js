import React, { useEffect, useState } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import Post from './../components/Post';
import WithHeader from './../components/WithHeader';
import Loader from './../components/Loader';
import Button from './../components/Button';
import { postReq } from './../request';
import Confirm from '../components/Confirm';

const useConfirm = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleConfirm = () => setIsShown(isShown => !isShown);
  return [isShown, toggleConfirm];
};

const SinglePost = props => {
  const [post, setPost] = useState({ isLoaded: false });
  const [error, setError] = useState(false);
  const [isShown, toggleConfirm] = useConfirm();

  const { id } = useParams();

  const history = useHistory();
  const deletePost = () => {
    postReq('/api/post/delete-post', { id }).then(() => history.push('/'));
  };

  useEffect(() => {
    fetch(`/api/post/${id}`)
      .then(res => res.json())
      .then(post => setPost({ ...post, isLoaded: true }))
      .catch(() => setError(true));
  }, [id]);

  if (error) return <Redirect to='/login' />;
  if (!post.isLoaded) return <Loader />;

  const deleteButton = (
    <Button
      className='post-action-icon icon'
      text='Delete Post'
      onClick={toggleConfirm}
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
        {post.isMyPost ? deleteButton : <></>}
        <Post className='single-post' post={post} />
      </div>
    </div>
  );
};

export default WithHeader(SinglePost);
