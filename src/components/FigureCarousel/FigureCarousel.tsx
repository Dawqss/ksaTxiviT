import sampleSize from 'lodash.samplesize';
import React, {useEffect, useMemo, useRef} from 'react';
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
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(
    function scrollToSecondItem() {
      let t1: string | number | NodeJS.Timeout | undefined;

      if (scrollViewRef.current && randomFigureIds) {
        t1 = setTimeout(() => {
          scrollViewRef.current?.scrollTo({
            // eslint-disable-next-line id-length
            y: 0,
            // eslint-disable-next-line id-length
            x: createOffsetsPointsForFigureCarousel(randomFigureIds)[1],
            animated: false,
          });
        }, 0);
      }

      return () => {
        t1 && clearTimeout(t1);
      };
    },
    [scrollViewRef, randomFigureIds],
  );

  return (
    <ScrollView
      ref={scrollViewRef}
      snapToAlignment="center"
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
