import React from 'react';
import {
  DashboardButton,
  RowContainer,
} from '../../index';

const ButtonRowElement = (props) => {
  const {
    onClick,
    title,
  } = props;

  return (
    <RowContainer
      align="full"
    >
      <DashboardButton
        onClick={onClick}
        size="big"
      >
        {title}
      </DashboardButton>
    </RowContainer>
  );

};

export default ButtonRowElement;
