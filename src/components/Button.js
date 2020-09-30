import React from 'react';
import styled from 'styled-components';

const SimpleButton = styled.button`
  padding: 10px 1rem;
  border: 1px solid #ccc;
  background: transparent;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  width: fit-content;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
    border: 1px solid #000;
  }
`;

const Button = props => {
  return <SimpleButton onClick={props.onClick}>{props.text}</SimpleButton>;
};

export default Button;
