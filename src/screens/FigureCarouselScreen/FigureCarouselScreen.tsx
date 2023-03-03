import {FigureCarousel} from 'components/FigureCarousel/FigureCarousel';
import {Routes} from 'navigation';
import React, {useCallback, useEffect, useState} from 'react';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {fetchHarryPotterMiniFigs, useAppDispatch} from 'store';
import {MainStackParams} from 'types';
import {
  StyledContainer,
  StyledFigureCarouselWrapper,
  StyledHeader,
  StyledButtonWrapper,
  StyledHeaderWrapper,
  StyledButton,
} from './styles';

const CAROUSEL_SIZE = 5;

export type FigureCarouselScreenProps = NativeStackScreenProps<
  MainStackParams,
  Routes.FigureCarousel
>;

export const FigureCarouselScreen = ({
  navigation: {navigate},
}: FigureCarouselScreenProps) => {
  const [selectedFigureId, setSelectedFigureId] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(function onInit() {
    dispatch(fetchHarryPotterMiniFigs());
  }, []);

  const handleFigurePress = useCallback((id: string) => {
    setSelectedFigureId(id);
  }, []);

  const onChooseFigurePress = useCallback(() => {
    if (!selectedFigureId) {
      return;
    }

    navigate(Routes.ShippingForm, {figureId: selectedFigureId});
  }, [selectedFigureId]);

  return (
    <StyledContainer>
      <StyledHeaderWrapper>
        <StyledHeader>CHOOSE YOUR MINIFIG</StyledHeader>
      </StyledHeaderWrapper>
      <StyledFigureCarouselWrapper>
        <FigureCarousel
          carouselSize={CAROUSEL_SIZE}
          onFigurePress={handleFigurePress}
          selectedFigureId={selectedFigureId}
        />
      </StyledFigureCarouselWrapper>
      <StyledButtonWrapper>
        <StyledButton
          label="Choose figure"
          onPress={onChooseFigurePress}
          isDisabled={!selectedFigureId}
        />
      </StyledButtonWrapper>
    </StyledContainer>
  );
};
