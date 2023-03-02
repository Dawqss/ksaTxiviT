import {ImageWithPlaceholder, StyledText} from 'components';
import {
  FIGURE_CAROUSEL_GAP_TO_FILL_WIDTH_IN_PX,
  FIGURE_CAROUSEL_ITEM_MARGIN,
  FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX,
} from 'constants/figureCarousel';
import {css, styled} from 'utils';

export const StyledContainer = styled.TouchableOpacity<{
  isFirst: boolean;
  isLast: boolean;
  isSelected: boolean;
}>`
  width: ${FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX}px;
  height: ${FIGURE_CAROUSEL_ITEM_SIDE_WIDTH_IN_PX}px;
  border-radius: 20px;
  align-self: center;
  overflow: visible;
  justify-content: space-evenly;
  padding-bottom: 10px;
  background-color: ${props => props.theme.palette.background.card};
  margin-left: ${props =>
    props.isFirst
      ? FIGURE_CAROUSEL_GAP_TO_FILL_WIDTH_IN_PX
      : FIGURE_CAROUSEL_ITEM_MARGIN}px;
  margin-right: ${props =>
    props.isLast
      ? FIGURE_CAROUSEL_GAP_TO_FILL_WIDTH_IN_PX
      : FIGURE_CAROUSEL_ITEM_MARGIN}px;
  ${props =>
    props.isSelected
      ? css`
          box-shadow: 0 0 8px ${props => props.theme.baseColors.orange};
          border: 1px solid orange;
        `
      : ''};
`;

export const StyledImageWithPlaceholder = styled(ImageWithPlaceholder)`
  margin-top: 20px;
  width: auto;
  height: 60%;
`;

export const StyledName = styled(StyledText)`
  color: ${props => props.theme.baseColors.darkBlue};
  padding: 4px 10px;
  font-size: 13px;
  text-align: center;
`;

export const StyledLinkShowDetails = styled(StyledText)`
  color: ${props => props.theme.baseColors.orange};
  font-size: 13px;
  padding: 4px 10px;
  text-align: center;
`;
