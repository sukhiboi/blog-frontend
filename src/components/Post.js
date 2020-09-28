import React from 'react';
import { useHistory } from 'react-router-dom';
import TextBox from './TextBox';

const formatDate = date => {
  const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
  return dateFormat.format(new Date(date));
};

const Post = props => {
  const { title, published_on, content, user_name } = props.post;
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

  const redirectToProfile = () => history.push(`/profile/${user_name}`);

  return (
    <div className={`post ${props.className}`}>
      <span className='post-title'>{title}</span>
      <span className='post-publish-date'>
        Published on {formatDate(published_on)} by
        {
          <span className='link' onClick={redirectToProfile}>
            {' '}
            {user_name}
          </span>
        }
      </span>
      {props.static ? <p className='post-content'>{content}</p> : contentBox}
    </div>
  );
};

export default Post;
