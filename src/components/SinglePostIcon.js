import styled from 'styled-components';

const SinglePostIcon = Component => {
  return styled(Component)`
    padding: 5px;
    border: 1px solid #cfcfcf;
    border-radius: 4px;
    margin: 0 4px;

    &:hover {
      cursor: pointer;
      border: 1px solid #000;
    }
  `;
};

export default SinglePostIcon;
