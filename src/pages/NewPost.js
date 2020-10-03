import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from './../components/Button/Button';
import TextBox from './../components/TextBox/TextBox';
import WithHeader from './../components/WithHeader';
import WithAuth from './../components/WithAuth';
import { postReq } from './../request';
import { useTitle } from '../hooks/useTitle';

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
  useTitle('New Post');
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [publishing, setPublishing] = useState(false);

  const publishPost = () => {
    setPublishing(true);
    postReq('/api/post/add-new-post', { title, content })
      .then(() => history.push('/'))
      .catch(() => history.push('/login'));
  };

  const PublishButton = <Button text='Publish' onClick={publishPost} />;
  const DisabledPublishButton = <DisabledButton text='Publish' />;

  return (
    <NewPostLayout>
      <Title placeholder='Title' wrap='off' rows='1' onChange={setTitle} />
      <Content placeholder='Content' onChange={setContent} />
      {!(title && content) || publishing
        ? DisabledPublishButton
        : PublishButton}
    </NewPostLayout>
  );
};

export default WithAuth(WithHeader(NewPost));
