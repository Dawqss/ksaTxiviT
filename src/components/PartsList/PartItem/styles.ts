import {StyledText} from 'components';
import {styled} from 'utils';

export const StyledContainer = styled.View`
  padding-bottom: 6px;
`;

export const StyledLabel = styled(StyledText)`
  font-size: 16px;
  color: ${props => props.theme.baseColors.darkBlue};
`;

export const StyledCode = styled(StyledLabel)`
  color: ${props => props.theme.baseColors.orange};
`;

export const StyledImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

export const StyledRow = styled.View`
  flex-direction: row;
`;

export const StyledLabelWrapper = styled.View`
  flex: 1;
`;
