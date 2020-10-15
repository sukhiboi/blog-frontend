import React from 'react';
import Post from './Post';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostListLayout = styled.div`
  width: 100%;
`;

const PostLink = styled(Link)`
  text-decoration: none;
`;

const PostList = props => {
  const postList = props.posts.map(post => (
    <PostLink to={`/post/${post.id}`} key={post.id}>
      <Post post={post} />
    </PostLink>
  ));
  return <PostListLayout>{postList}</PostListLayout>;
};

export default PostList;
