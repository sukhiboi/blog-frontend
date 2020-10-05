import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { usePost } from '../hooks/usePost';
import { BiTrash } from 'react-icons/bi';
import { FiEdit2 } from 'react-icons/fi';
import Post from './../components/Post';
import Confirm from '../components/Confirm';
import Loader from './../components/Loader/Loader';
import SinglePostIcon from './../components/SinglePostIcon';
import WithHeader from './../components/WithHeader';
import WithAuth from './../components/WithAuth';
import { postReq } from './../request';
import { useTitle } from '../hooks/useTitle';

const Group = styled.div`
  position: absolute;
  right: 0;
  top: 1rem;
`;

const SinglePostLayout = styled.div`
  border: none;
  width: 70%;
  margin: 10px auto;
  position: relative;
`;

const BackToHomeLink = styled(Link)`
  padding-left: 1rem;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const DeleteButton = SinglePostIcon(BiTrash);
const EditButton = SinglePostIcon(FiEdit2);

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

  const PostActionGroup = (
    <Group>
      <EditButton onClick={() => console.log('edit post')} size='1.2rem' />
      <DeleteButton onClick={toggleConfirm} size='1.2rem' />
    </Group>
  );

  const confirmText = 'Are you sure you want to delete this post?';
  const confirmBox = (
    <Confirm no={toggleConfirm} yes={deletePost} text={confirmText} />
  );

  return (
    <div>
      {isShown ? confirmBox : <></>}
      <SinglePostLayout>
        {post.user_id === props.user.user_id ? PostActionGroup : <></>}
        <Post post={post} fullView />
        <BackToHomeLink to='/' children='← Back to Home' />
      </SinglePostLayout>
    </div>
  );
};

export default WithAuth(WithHeader(SinglePost));
