import React from 'react';
import { useHistory } from 'react-router-dom';
import TextBox from './TextBox';

const formatDate = date => {
  const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
  return dateFormat.format(new Date(date));
};

const Post = props => {
  const { title, publishedDate, content, name } = props.post;
  const history = useHistory();

  const contentBox = (
    <TextBox
      className='post-content'
      rows='2'
      value={content}
      disabled={true}
      onChange={() => {}}
    />
  );

  return (
    <div className={`post ${props.className}`}>
      <span className='post-title'>{title}</span>
      <span className='post-publish-date'>
        Published on {formatDate(publishedDate)} by
        {<span onClick={() => history.push(`/profile/${name}`)}> {name}</span>}
      </span>
      {props.static ? <p className='post-content'>{content}</p> : contentBox}
    </div>
  );
};

export default Post;
