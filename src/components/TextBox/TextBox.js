import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TextAreaLayout = styled.textarea`
  font-family: sans-serif;
  border: 1px solid #ccc;
  outline: none;
  padding: 10px;
  resize: none;
  border-radius: 4px;
  margin-bottom: 10px;

  &:focus {
    border: 1px solid #000;
  }
`;

const TextBox = props => {
  const [input, setInput] = useState(props.value);

  return (
    <TextAreaLayout
      {...props}
      value={input}
      onChange={({ target }) => {
        setInput(target.value);
        props.onChange(target.value);
      }}
    />
  );
};

TextBox.defaultProps = {
  value: '',
};

export default TextBox;
