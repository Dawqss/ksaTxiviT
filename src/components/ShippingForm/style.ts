import {Button} from 'components';
import {styled} from 'utils';

export const StyledContainer = styled.View`
  padding: 0 8%;
  flex: 1;
`;

export const StyledButtonWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
`;

export const StyledButton = styled(Button)`
  width: 180px;
`;
