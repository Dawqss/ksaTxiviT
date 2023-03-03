import {StyledText} from 'components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styled} from 'utils';

export const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.baseColors.darkBlue};
`;

export const StyledHeader = styled(StyledText)`
  font-weight: 800;
  color: ${props => props.theme.baseColors.white};
  font-size: 25px;
  padding-top: 12%;
  padding-bottom: 8%;
  text-align: center;
`;

export const StyledScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {flex: 1},
}))``;
