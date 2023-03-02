import {FigureCarousel} from 'components/FigureCarousel/FigureCarousel';
import React, {useCallback, useEffect, useState} from 'react';
import {fetchHarryPotterMiniFigs, useAppDispatch} from 'store';
import {
  StyledContainer,
  StyledFigureCarouselWrapper,
  StyledHeader,
  StyledButtonWrapper,
  StyledHeaderWrapper,
  StyledButton,
} from './styles';

const CAROUSEL_SIZE = 5;

export const FigureCarouselScreen = () => {
  const [selectedFigureId, setSelectedFigureId] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(function onInit() {
    dispatch(fetchHarryPotterMiniFigs());
  }, []);

  const handleFigurePress = useCallback((id: string) => {
    setSelectedFigureId(id);
  }, []);

  const onChooseFigurePress = useCallback(() => {
    console.log(selectedFigureId);
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
