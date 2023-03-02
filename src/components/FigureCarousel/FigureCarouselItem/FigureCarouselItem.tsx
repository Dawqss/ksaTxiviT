import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {getFigureById, setUrlAction, useAppDispatch} from 'store';
import {
  StyledImageWithPlaceholder,
  StyledContainer,
  StyledName,
  StyledLinkShowDetails,
} from './styles';

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
  const dispatch = useAppDispatch();
  const {set_img_url, name, set_url} = useSelector(getFigureById(id));
  const handlePress = useCallback(() => {
    onPress(id);
  }, [id]);

  const onShowDetailsPress = useCallback(() => {
    dispatch(setUrlAction(set_url));
  }, [set_url]);

  return (
    <StyledContainer
      isFirst={isFirst}
      isLast={isLast}
      isSelected={isSelected}
      onPress={handlePress}>
      <StyledImageWithPlaceholder uri={set_img_url} resizeMode="contain" />
      <StyledName>{name}</StyledName>
      <StyledLinkShowDetails onPress={onShowDetailsPress}>
        Show Details
      </StyledLinkShowDetails>
    </StyledContainer>
  );
};
