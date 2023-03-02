import {Providers} from 'components';
import {ControlledWebView} from 'components/ControlledWebView/ControlledWebView';
import {MainNavigator} from 'navigation';
import React from 'react';

const App = () => {
  return (
    <Providers>
      <MainNavigator />
      <ControlledWebView />
    </Providers>
  );
};

export default App;
