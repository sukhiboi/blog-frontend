import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const SearchLayout = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #cfcfcf;
  height: fit-content;
  overflow: hidden;
  margin-top: 1rem;
  margin-left: 2rem;

  &:focus-within {
    border: 1px solid #000;
  }
`;

const SearchIcon = styled(BiSearch)`
  padding-right: 4px;
`;

const SearchInput = styled.input`
  border: none;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  font-size: 1rem;
`;

const SearchBar = props => {
  const [value, setValue] = useState('');

  return (
    <SearchLayout>
      <SearchIcon size='1.5rem' />
      <SearchInput
        {...props}
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
          props.onChange(target.value);
        }}
      />
    </SearchLayout>
  );
};

export default SearchBar;
