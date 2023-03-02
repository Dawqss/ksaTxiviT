import {StyledText} from 'components';
import {TouchableOpacity} from 'react-native';
import {styled} from 'utils';

export const StyledTouchableOpacity = styled(TouchableOpacity)<{
  isDisabled: boolean;
}>`
  background-color: ${({theme, isDisabled}) =>
    isDisabled ? theme.baseColors.grey : theme.palette.button.background};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 5px 7px rgba(1, 1, 1, 0.75);
`;

export const StyledLabel = styled(StyledText)`
  font-size: 14px;
  height: 40px;
  padding: 8px 12px 10px;
  color: ${props => props.theme.palette.button.label};
`;
