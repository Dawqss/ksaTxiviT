import { styled } from "utils";
import { StyledText } from "components";

export const StyledErrorContainer = styled.View`
  height: 12px;
  padding: 4px 0;
`;

export const StyledErrorLabel = styled(StyledText)`
  font-weight: 300;
  font-size: 8px;
  color: ${props => props.theme.baseColors.red};
`;
