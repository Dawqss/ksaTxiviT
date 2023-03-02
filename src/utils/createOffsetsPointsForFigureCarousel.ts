import {
  FIGURE_CAROUSEL_ITEM_MARGIN,
  FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX,
} from 'components';

const elementWithFilledGap =
  FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX + FIGURE_CAROUSEL_ITEM_MARGIN * 2;

export const createOffsetsPointsForFigureCarousel = (ids: string[]) => {
  return ids.map((__, index) => index * elementWithFilledGap);
};
