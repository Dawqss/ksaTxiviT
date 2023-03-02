import {Dimensions} from 'react-native';

export const FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX =
  Dimensions.get('window').width * 0.7;

export const FIGURE_CAROUSEL_ITEM_MARGIN = 20;

export const FIGURE_CAROUSEL_GAP_TO_FILL_WIDTH_IN_PX =
  (Dimensions.get('window').width - FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX) / 2;
