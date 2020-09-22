import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from './../components/Button';
import TextBox from './../components/TextBox';
import './../styles/new-post.css';

const NewPost = props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [error, setError] = useState(false);

  const publishPost = () => {
    fetch('/api/post/add-new-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    })
      .then(() => setPublished(true))
      .catch(() => setError(true));
  };

  if (error) return <Redirect to='/login' />;
  if (published) return <Redirect to='/' />;
  return (
    <div>
      <div className='new-post'>
        <TextBox
          className='title'
          placeholder='Title'
          rows='1'
          wrap='off'
          onChange={setTitle}
        />
        <TextBox
          className='content'
          placeholder='Content'
          onChange={setContent}
        />
        <Button text='Publish' onClick={publishPost} />
      </div>
    </div>
  );
};

export default NewPost;
