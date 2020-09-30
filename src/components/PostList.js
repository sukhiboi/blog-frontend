import React from 'react';
import Post from './Post';

const PostList = props => {
  const postList = props.posts.map(post => <Post post={post} key={post.id} />);
  return <div>{postList}</div>;
};

export default PostList;
