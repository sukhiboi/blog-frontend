import React from 'react';

const Post = props => {
  const { title, publishedDate, content } = props.post;
  return (
    <div>
      <h1>{title}</h1>
      <span>{publishedDate}</span>
      <p>{content}</p>
      <hr />
    </div>
  );
};

export default Post;
