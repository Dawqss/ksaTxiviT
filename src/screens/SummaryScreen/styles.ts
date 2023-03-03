import {ImageWithPlaceholder, StyledText} from 'components';
import {styled} from 'utils';

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  margin: 20px;
`;

export const StyledWrapper = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {flex: 1},
}))`
  border-radius: 8px;
  background-color: ${props => props.theme.palette.background.card};
`;

export const CloseButtonWrapper = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StyledHeader = styled(StyledText)`
  font-size: 25px;
  font-weight: 800;
  color: ${props => props.theme.baseColors.darkBlue};
  padding-top: 5px;
  padding-bottom: 20px;
  text-align: center;
`;

export const StyledLabel = styled(StyledText)`
  padding-top: 16px;
  font-size: 16px;
  color: ${props => props.theme.baseColors.darkBlue};
`;

export const StyledName = styled(StyledLabel)`
  text-align: center;
  padding: 5px 30px;
`;

export const StyledImage = styled(ImageWithPlaceholder)`
  height: 160px;
`;

export const StyledFigureWrapper = styled.View`
  margin: 0 auto;
  justify-content: center;
`;

export const StyledPartsWrapper = styled.View`
  padding: 10px 8%;
`;

export const StyledSubmitButtonWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 30px;
`;
