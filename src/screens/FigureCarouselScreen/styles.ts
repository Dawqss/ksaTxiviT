import {Button, StyledText} from 'components';
import {
  FIGURE_CAROUSEL_ITEM_MARGIN,
  FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX,
} from 'constants/figureCarousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styled} from 'utils';

export const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.palette.background.main};
`;

export const StyledHeader = styled(StyledText)`
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
  justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
  margin: 20px auto;
  width: 170px;
`;
