import {styled} from 'utils';

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  margin: 20px;
`;

export const StyledWrapper = styled.View`
  border-radius: 8px;
  flex: 1;
  background-color: ${props => props.theme.palette.background.card};
`;

export const CloseButtonWrapper = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: flex-end;
`;
