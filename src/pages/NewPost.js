import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './../components/Header';
import Button from './../components/Button';
import TextBox from './../components/TextBox';
import './../styles/new-post.css';

const NewPost = props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const history = useHistory();

  const publish = () => {
    fetch('/api/post/add-new-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    }).then(() => history.push('/'));
  };

  return (
    <div>
      <Header username={props.user.name} />
      <div className='new-post'>
        <TextBox
          className='input title'
          placeholder='Title'
          rows='1'
          wrap='off'
          onChange={setTitle}
        />
        <TextBox
          className='input content'
          placeholder='Content'
          rows='15'
          onChange={setContent}
        />
        <Button text='Publish' onClick={publish} />
      </div>
    </div>
  );
};

export default NewPost;
