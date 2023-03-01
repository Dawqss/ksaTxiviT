import React, {FC, ReactNode} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {defaultTheme} from 'theme/defaultTheme';
import {styled, ThemeProvider} from 'utils';

const StyledGestureHandlerRootView = styled(GestureHandlerRootView)`
  flex: 1;
`;

export const Providers: FC<{children: ReactNode | undefined}> = ({
  children,
}) => {
  return (
    <StyledGestureHandlerRootView>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </StyledGestureHandlerRootView>
  );
};
