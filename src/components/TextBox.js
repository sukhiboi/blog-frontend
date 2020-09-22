import React, { useState } from 'react';

const InputBar = ({ value, onChange, ...rest }) => {
  const [input, setInput] = useState(value || '');

  return (
    <textarea
      value={input}
      onChange={({ target }) => {
        setInput(target.value);
        onChange(target.value);
      }}
      {...rest}
    />
  );
};

export default InputBar;
