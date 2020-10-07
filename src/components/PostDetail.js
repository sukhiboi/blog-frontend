import React from 'react';
import styled, { css } from 'styled-components';

const formatDate = date => {
  const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
  return dateFormat.format(new Date(date));
};

const Italic = styled.span`
  font-style: italic;
  /* padding-top: 0px; */
  font-size: 0.8rem;
`;

const Username = styled.a`
  ${props =>
    !props.fullView &&
    css`
      pointer-events: none;
    `}
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

const PostDetail = props => {
  const published_on = formatDate(props.published_on);
  return (
    <Italic>
      Published On {published_on} by{' '}
      <Username fullView={props.fullView} href={`/profile/${props.user_name}`}>
        {props.user_name}
      </Username>
    </Italic>
  );
};

export default PostDetail;
