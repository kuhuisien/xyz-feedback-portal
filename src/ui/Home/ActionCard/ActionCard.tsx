import React from 'react';
import { CardContainer, CardInfoText, CardTitle } from './ActionCard.styles';
import { IActionCardProps } from './ActionCard.types';

const ActionCard = ({ title, info, onClick }: IActionCardProps) => {
  return (
    <CardContainer onClick={onClick}>
      <CardTitle>{title}</CardTitle>

      <CardInfoText>{info}</CardInfoText>
    </CardContainer>
  );
};

export default ActionCard;
