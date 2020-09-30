import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const formatDate = date => {
  const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
  return dateFormat.format(new Date(date));
};

const Italic = styled.span`
  font-style: italic;
  padding-top: 10px;
`;

const Username = styled.span`
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const PostDetail = props => {
  const history = useHistory();
  const published_on = formatDate(props.published_on);
  return (
    <Italic>
      Published On {published_on} by{' '}
      <Username onClick={() => history.push(`/profile/${props.user_name}`)}>
        {props.user_name}
      </Username>
    </Italic>
  );
};

export default PostDetail;
