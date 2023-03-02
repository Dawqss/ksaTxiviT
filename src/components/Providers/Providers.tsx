import React, {FC, ReactNode} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from 'store';
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
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    </StyledGestureHandlerRootView>
  );
};
