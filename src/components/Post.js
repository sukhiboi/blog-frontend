import React from 'react';
import TextBox from './TextBox';

const formatDate = date => {
  const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
  return dateFormat.format(new Date(date));
};

const Post = props => {
  const { title, publishedDate, content } = props.post;
  return (
    <div className={`post ${props.className}`}>
      <span className='post-title'>{title}</span>
      <span className='post-publish-date'>{formatDate(publishedDate)}</span>
      <TextBox
        className='post-content'
        rows='1'
        value={content}
        disabled={true}
        onChange={() => {}}
      />
    </div>
  );
};

export default Post;
