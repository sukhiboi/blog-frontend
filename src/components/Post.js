import React from 'react';
import styled, { css } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Prism } from 'react-syntax-highlighter';
import PostDetail from './PostDetail';

const CodeBlock = ({ language, value }) => (
  <Prism language={language}>{value}</Prism>
);

const PostLayout = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px;
  text-decoration: none;
  color: #000;
  width: 100%;
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
  ${props =>
    props.fullView
      ? css`
          font-size: 2rem;
        `
      : css`
          font-size: 1.6rem;
        `}
  font-weight: 500;
  display: block;
  padding-bottom: 4px;
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

  & p {
    padding-bottom: 10px;
    font-size: 1.2rem;
  }
`;

const Post = ({ post, fullView }) => {
  const { title, published_on, content, user_name } = post;

  return (
    <PostLayout fullView={fullView}>
      <Title fullView={fullView}>{title}</Title>
      <PostDetail
        fullView={fullView}
        published_on={published_on}
        user_name={user_name}
      />
      <Content
        fullView={fullView}
        source={content}
        renderers={{ code: CodeBlock }}
      />
    </PostLayout>
  );
};

export default Post;
