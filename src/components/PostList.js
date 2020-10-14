import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const PostListLayout = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const PostList = props => {
  const postList = props.posts.map(post => <Post post={post} key={post.id} />);
  return <PostListLayout>{postList}</PostListLayout>;
};

export default PostList;
