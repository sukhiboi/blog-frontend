import React, { useState } from 'react';

const TextBox = props => {
  const [input, setInput] = useState(props.value || '');

  return (
    <textarea
      {...props}
      className={`input ${props.className}`}
      value={input}
      onChange={({ target }) => {
        setInput(target.value);
        props.onChange(target.value);
      }}
    />
  );
};

export default TextBox;
