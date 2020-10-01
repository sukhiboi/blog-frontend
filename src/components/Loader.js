import React from 'react';
import styled from 'styled-components';

const LoaderLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
  font-size: 2rem;
  font-weight: 900;
`;

const Loader = props => {
  return <LoaderLayout children='Loading...' />;
};

export default Loader;
