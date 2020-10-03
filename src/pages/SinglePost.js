import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { usePost } from '../hooks/usePost';
import { BiTrash } from 'react-icons/bi';
import Post from './../components/Post';
import Confirm from '../components/Confirm';
import Loader from './../components/Loader/Loader';
import WithHeader from './../components/WithHeader';
import WithAuth from './../components/WithAuth';
import { postReq } from './../request';
import { useTitle } from '../hooks/useTitle';

const SinglePostLayout = styled.div`
  border: none;
  width: 70%;
  margin: 10px auto;
  position: relative;
`;

const DeleteButton = styled(BiTrash)`
  position: absolute;
  right: 0;
  top: 1rem;
  padding: 5px;
  border: 1px solid #cfcfcf;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    border: 1px solid #000;
  }
`;

const BackToHomeLink = styled(Link)`
  padding-left: 1rem;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

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

  const deleteButton = <DeleteButton onClick={toggleConfirm} size='1.2rem' />;
  const confirmText = 'Are you sure you want to delete this post?';
  const confirmBox = (
    <Confirm no={toggleConfirm} yes={deletePost} text={confirmText} />
  );
  
  return (
    <div>
      {isShown ? confirmBox : <></>}
      <SinglePostLayout>
        {post.user_id === props.user.user_id ? deleteButton : <></>}
        <Post post={post} fullView />
        <BackToHomeLink to='/' children='← Back to Home' />
      </SinglePostLayout>
    </div>
  );
};

export default WithAuth(WithHeader(SinglePost));
