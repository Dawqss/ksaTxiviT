import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {getFigureById} from 'store';
import {StyledContainer, StyledImage} from './styles';

export interface FigureCarouselItemProps {
  isFirst: boolean;
  isLast: boolean;
  isSelected: boolean;
  onPress: (id: string) => void;
  id: string;
}

export const FigureCarouselItem = ({
  isFirst,
  isLast,
  onPress,
  isSelected,
  id,
}: FigureCarouselItemProps) => {
  const item = useSelector(getFigureById(id));
  const handlePress = useCallback(() => {
    onPress(id);
  }, [id]);

  console.log(id);

  console.log(item);

  return (
    <StyledContainer
      isFirst={isFirst}
      isLast={isLast}
      isSelected={isSelected}
      onPress={handlePress}>
      <StyledImage />
    </StyledContainer>
  );
};
