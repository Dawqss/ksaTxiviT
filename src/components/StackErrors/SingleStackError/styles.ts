import {StyledText} from 'components';
import {styled} from 'utils';

export const StyledSingleStackErrorContainer = styled.View<{
  type: 'warning' | 'error';
}>`
  margin: 10px 8px;
  background-color: ${props =>
    props.type === 'error'
      ? props.theme.baseColors.red
      : props.theme.baseColors.yellow};
  padding: 9px 12px 10px 12px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSingleStackLabel = styled(StyledText)`
  color: ${props => props.theme.baseColors.white};
`;
