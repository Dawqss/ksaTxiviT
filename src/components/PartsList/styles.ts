import {StyledText} from 'components';
import {styled} from 'utils';

export const StyledContainer = styled.View`
  height: auto;
`;

export const StyledLabel = styled(StyledText)`
  font-size: 16px;
  color: ${props => props.theme.baseColors.darkBlue};
  padding-bottom: 8px;
`;
