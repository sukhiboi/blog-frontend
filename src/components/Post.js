import React from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import PostDetail from './PostDetail';

const PostLayout = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  text-decoration: none;
  color: #000;
  width: 70%;
  ${props =>
    props.fullView &&
    css`
      width: 100%;
      border-bottom: none;
    `}
  margin: 0 auto;

  &:hover {
    cursor: pointer;
    background: #fbfbfb;
    ${props =>
      props.fullView &&
      css`
        cursor: default;
        background: transparent;
      `}
  }
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 900;
  display: block;
  padding-bottom: 10px;
`;

const Content = styled(ReactMarkdown)`
  ${props =>
    props.fullView &&
    css`
      padding-top: 20px;
    `}
  width: -webkit-fill-available;
  background: transparent;
  border: none;
  outline: none;
  font-family: sans-serif;
  line-height: 1.8;
  resize: none;
  white-space: pre-wrap;
  overflow: hidden;
  margin: 0;

  & * {
    margin: 0;
  }
`;

const Post = ({ post, fullView }) => {
  const { title, published_on, content, user_name, id } = post;
  const history = useHistory();

  return (
    <PostLayout fullView={fullView} onClick={() => history.push(`/post/${id}`)}>
      <Title>{title}</Title>
      <PostDetail
        fullView={fullView}
        published_on={published_on}
        user_name={user_name}
      />
      <Content fullView={fullView} source={content} />
    </PostLayout>
  );
};

export default Post;
