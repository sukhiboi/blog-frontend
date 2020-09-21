import React, { useState } from 'react';

const ContentBox = props => {
  const [value, setValue] = useState(props.value);

  const updateValue = ({ target }) => {
    setValue(target.value);
    props.onChange(target.value);
  };

  return (
    <div>
      <textarea
        className='post-content'
        {...props}
        value={value}
        onChange={updateValue}
      />
    </div>
  );
};

export default ContentBox;
