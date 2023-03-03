import {StyledText} from 'components';
import {TextInputProps as RNTextInputProps} from 'react-native';
import {styled} from 'utils';

export const StyledContainer = styled.View`
  padding-bottom: 4px;
`;

export const StyledLabel = styled(StyledText)`
  font-size: 14px;
  color: ${props => props.theme.baseColors.white};
`;

export const StyledTextInput = styled.TextInput.attrs(
  (props: RNTextInputProps) => props,
)`
  font-family: 'Changa';
  height: 42px;
  padding: 8px 8px 7px 20px;
  color: ${props => props.theme.baseColors.darkBlue};
  background-color: ${props => props.theme.baseColors.white};
  border-radius: 6px;
  font-size: 14px;
`;

export const StyledErrorContainer = styled.View`
  padding: 1px 0;
  height: 20px;
`;

export const StyledErrorLabel = styled(StyledText)`
  font-weight: 300;
  font-size: 12px;
  color: ${props => props.theme.baseColors.red};
`;
