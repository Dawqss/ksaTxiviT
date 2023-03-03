import {PartsList, CloseButton} from 'components';
import {Routes} from 'navigation';
import React, {useCallback, useEffect} from 'react';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {useSelector} from 'react-redux';
import {getFigureById, useAppDispatch, fetchPartsByFigureId} from 'store';
import {MainStackParams} from 'types';
import {shortName} from 'utils';
import {
  StyledContainer,
  StyledWrapper,
  CloseButtonWrapper,
  StyledHeader,
  StyledImage,
  StyledFigureWrapper,
  StyledName,
  StyledPartsWrapper,
} from './styles';

export type SummaryScreenProp = NativeStackScreenProps<
  MainStackParams,
  Routes.SummaryScreen
>;

export const SummaryScreen = ({
  navigation,
  route: {
    params: {figureId},
  },
}: SummaryScreenProp) => {
  const dispatch = useAppDispatch();
  const {set_img_url, name} = useSelector(getFigureById(figureId));

  useEffect(
    function onInit() {
      dispatch(fetchPartsByFigureId(figureId));
    },
    [figureId],
  );

  const onCloseButtonPress = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <StyledContainer>
      <StyledWrapper>
        <CloseButtonWrapper>
          <CloseButton onPress={onCloseButtonPress} />
        </CloseButtonWrapper>
        <StyledHeader>SUMMARY</StyledHeader>
        <StyledFigureWrapper>
          <StyledImage uri={set_img_url} resizeMode="contain" />
          <StyledName>{shortName(name)}</StyledName>
        </StyledFigureWrapper>
        <StyledPartsWrapper>
          <PartsList />
        </StyledPartsWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
};
