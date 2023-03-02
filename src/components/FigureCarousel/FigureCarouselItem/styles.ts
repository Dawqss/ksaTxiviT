import {Dimensions} from 'react-native';
import {css, styled} from 'utils';

export const FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX =
  Dimensions.get('window').width * 0.7;

export const FIGURE_CAROUSEL_ITEM_MARGIN = 20;

export const FIGURE_CAROUSEL_GAP_TO_FILL_WIDTH_IN_PX =
  (Dimensions.get('window').width - FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX) / 2;

export const StyledContainer = styled.TouchableOpacity<{
  isFirst: boolean;
  isLast: boolean;
  isSelected: boolean;
}>`
  width: ${FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX}px;
  height: ${FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX}px;
  border-radius: 20px;
  background-color: ${props => props.theme.palette.background.card};
  margin-left: ${props =>
    props.isFirst
      ? FIGURE_CAROUSEL_GAP_TO_FILL_WIDTH_IN_PX
      : FIGURE_CAROUSEL_ITEM_MARGIN}px;
  margin-right: ${props =>
    props.isLast
      ? FIGURE_CAROUSEL_GAP_TO_FILL_WIDTH_IN_PX
      : FIGURE_CAROUSEL_ITEM_MARGIN}px;
  align-self: center;
  overflow: visible;

  ${props =>
    props.isSelected
      ? css`
          box-shadow: 0 0 8px ${props => props.theme.baseColors.orange};
          border: 1px solid orange;
        `
      : ''};
`;
