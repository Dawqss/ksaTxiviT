import React from 'react';
import {useSelector} from 'react-redux';
import {getPartById} from 'store/figureParts/figureParts.selectors';
import {
  StyledContainer,
  StyledRow,
  StyledImage,
  StyledCode,
  StyledLabel,
  StyledLabelWrapper,
} from './styles';

export interface PartItemProps {
  id: string;
}

export const PartItem = ({id}: PartItemProps) => {
  const {
    part: {name, part_img_url, part_num},
  } = useSelector(getPartById(id));

  return (
    <StyledContainer>
      <StyledRow>
        <StyledImage source={{uri: part_img_url}} />
        <StyledLabelWrapper>
          <StyledLabel numberOfLines={1} ellipsizeMode="tail">
            {name}
          </StyledLabel>
          <StyledCode>{part_num}</StyledCode>
        </StyledLabelWrapper>
      </StyledRow>
    </StyledContainer>
  );
};
