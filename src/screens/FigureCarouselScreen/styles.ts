import {
  FIGURE_CAROUSEL_ITEM_MARGIN,
  FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX,
} from 'components';
import {styled} from 'utils';

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.palette.background.main};
`;

export const StyledHeader = styled.Text`
  font-family: 'Changa-Regular';
  font-weight: 800;
  color: ${props => props.theme.baseColors.white};
  font-size: 25px;
  padding-bottom: 60px;
`;

export const StyledHeaderWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledFigureCarouselWrapper = styled.View`
  height: ${FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX +
  FIGURE_CAROUSEL_ITEM_MARGIN * 2}px;
`;

export const StyledButtonWrapper = styled.View`
  flex: 1;
`;
