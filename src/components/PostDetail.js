import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const formatDate = date => {
  const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
  return dateFormat.format(new Date(date));
};

const Italic = styled.span`
  font-style: italic;
  font-size: 0.8rem;

  & > a {
    ${props =>
      !props.fullView &&
      css`
        pointer-events: none;
      `}
  }
`;

const Username = styled(Link)`
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

const PostDetail = props => {
  const published_on = formatDate(props.published_on);
  return (
    <Italic fullView={props.fullView}>
      Published On {published_on} by{' '}
      {props.fullView ? (
        <Username to={`/profile/${props.user_name}`}>
          {props.user_name}
        </Username>
      ) : (
        props.user_name
      )}
    </Italic>
  );
};

export default PostDetail;
