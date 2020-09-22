import React from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

const PostList = props => {
  const postList = props.posts.map(post => (
    <Link className='link' to={`/post/${post.id}`} key={post.id}>
      <Post post={post} />
    </Link>
  ));
  return <div>{postList}</div>;
};

export default PostList;
