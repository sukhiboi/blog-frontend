import React from 'react';
import Header from './Header';

const WithHeader = Component => {
  return props => (
    <div>
      <Header {...props} />
      <Component {...props} />
    </div>
  );
};

export default WithHeader;
