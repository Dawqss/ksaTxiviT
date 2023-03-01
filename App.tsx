import {MainNavigator} from 'navigation';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {defaultTheme} from 'theme/defaultTheme';
import {ThemeProvider} from 'utils';

const App = () => {
  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={defaultTheme}>
        <MainNavigator />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
