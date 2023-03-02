import sampleSize from 'lodash.samplesize';
import React, {useMemo} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {getAllFiguresIds} from 'store';
import {createOffsetsPointsForFigureCarousel} from 'utils';
import {FigureCarouselItem} from './FigureCarouselItem/FigureCarouselItem';

export interface FigureCarouselProps {
  carouselSize: number;
  onFigurePress: (pressedFigureId: string) => void;
  selectedFigureId: string | null;
}

export const FigureCarousel = ({
  carouselSize,
  onFigurePress,
  selectedFigureId,
}: FigureCarouselProps) => {
  const miniFigureIds = useSelector(getAllFiguresIds);
  const randomFigureIds = useMemo(
    () => sampleSize(miniFigureIds, carouselSize),
    [miniFigureIds, carouselSize],
  );

  return (
    <ScrollView
      horizontal
      decelerationRate="fast"
      snapToOffsets={createOffsetsPointsForFigureCarousel(randomFigureIds)}
      showsHorizontalScrollIndicator={false}>
      {randomFigureIds.map((id, index) => (
        <FigureCarouselItem
          isLast={index === randomFigureIds.length - 1}
          isSelected={id === selectedFigureId}
          onPress={onFigurePress}
          isFirst={index === 0}
          key={id}
          id={id}
        />
      ))}
    </ScrollView>
  );
};
