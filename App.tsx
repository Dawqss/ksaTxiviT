import {Providers} from 'components';
import {StackErrors} from 'components/StackErrors/StackErrors';
import {MainNavigator} from 'navigation';
import React from 'react';

const App = () => {
  return (
    <Providers>
      <MainNavigator />
      <StackErrors />
    </Providers>
  );
};

export default App;
