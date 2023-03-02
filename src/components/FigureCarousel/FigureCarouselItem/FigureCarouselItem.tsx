import {NavigationProp} from '@react-navigation/core/src/types';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'navigation';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {getFigureById} from 'store';
import {MainStackParams} from 'types';
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
  const {navigate} = useNavigation<NavigationProp<MainStackParams>>();
  const {set_img_url, name, set_url} = useSelector(getFigureById(id));
  const handlePress = useCallback(() => {
    onPress(id);
  }, [id]);

  const onShowDetailsPress = useCallback(() => {
    navigate(Routes.WebView, {uri: set_url});
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
