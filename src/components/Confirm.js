import React from 'react';
import Button from './Button/Button';
import styled from 'styled-components';

const ConfirmLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 2rem;
  z-index: 3;
  background-color: #fff;
`;

const Message = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 10px;

  & button {
    margin: 0 10px;
    width: 80px;
  }
`;

const Confirm = props => {
  return (
    <ConfirmLayout>
      <Message children={props.text} />
      <ActionButtons>
        <Button text='Yes' onClick={props.yes} />
        <Button text='No' onClick={props.no} />
      </ActionButtons>
    </ConfirmLayout>
  );
};

export default Confirm;
