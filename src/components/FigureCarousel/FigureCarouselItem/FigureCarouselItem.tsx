import React, {useCallback} from 'react';
import {StyledContainer} from './styles';

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
  const handlePress = useCallback(() => {
    onPress(id);
  }, [id]);

  return (
    <StyledContainer
      isFirst={isFirst}
      isLast={isLast}
      isSelected={isSelected}
      onPress={handlePress}></StyledContainer>
  );
};
