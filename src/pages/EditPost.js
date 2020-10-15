import React, { useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Button from './../components/Button/Button';
import Loader from '../components/Loader/Loader';
import TextBox from './../components/TextBox/TextBox';
import WithHeader from './../components/WithHeader';
import WithAuth from './../components/WithAuth';
import { postReq } from './../request';
import { useTitle } from '../hooks/useTitle';
import { usePost } from '../hooks/usePost';

const NewPostLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 1rem auto;
`;

const Title = styled(TextBox)`
  font-size: 1.6rem;
  font-weight: 900;
  padding-bottom: 0;
`;

const Content = styled(TextBox)`
  font-size: 1.2rem;
  line-height: 1.4;
  height: 60vh;
`;

const DisabledButton = styled(Button)`
  user-select: none;
  pointer-events: none;
  color: #cfcfcf;
`;

const NewPost = props => {
  useTitle('Edit Post');
  const history = useHistory();
  const [post, error] = usePost();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    setContent(post.content);
    setTitle(post.title);
  }, [post]);

  if (error) return <Redirect to='/' />;
  if (!post.isLoaded) return <Loader />;

  const updatePost = () => {
    setUpdating(true);
    postReq('/api/post/update-post', {
      updatedPost: { title, content },
      id: post.id,
    })
      .then(() => history.push(`/post/${post.id}`))
      .catch(() => history.push('/')); //need to fix this because there is no login page
  };

  const UpdateButton = <Button text='Update' onClick={updatePost} />;
  const DisabledUpdateButton = <DisabledButton text='Update' />;

  return (
    <NewPostLayout>
      <Title
        value={post.title}
        placeholder='Title'
        wrap='off'
        rows='1'
        onChange={setTitle}
      />
      <Content
        value={post.content}
        placeholder='Content'
        onChange={setContent}
      />
      {!(title && content) || updating ? DisabledUpdateButton : UpdateButton}
    </NewPostLayout>
  );
};

export default WithAuth(WithHeader(NewPost));
