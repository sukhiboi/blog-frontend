import React from 'react';
import ContentBox from './ContentBox';

const Post = props => {
  const { title, publishedDate, content } = props.post;
  return (
    <div>
      <h1>{title}</h1>
      <span>{publishedDate}</span>
      <ContentBox value={content} disabled={true} onChange={() => {}} />
      <hr />
    </div>
  );
};

export default Post;
