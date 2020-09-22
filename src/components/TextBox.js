import React, { useState } from 'react';

const TextBox = ({ value, onChange, ...rest }) => {
  const [input, setInput] = useState(value || '');

  return (
    <textarea
      className={`input ${rest.className}`}
      value={input}
      onChange={({ target }) => {
        setInput(target.value);
        onChange(target.value);
      }}
      {...rest}
    />
  );
};

export default TextBox;
