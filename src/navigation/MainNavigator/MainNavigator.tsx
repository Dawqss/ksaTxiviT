import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {FigureCarouselScreen} from 'screens';
import {mainScreenOptions, MainStack, Routes} from '../constants';

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={mainScreenOptions}
        initialRouteName={Routes.FigureCarousel}>
        <MainStack.Screen
          name={Routes.FigureCarousel}
          component={FigureCarouselScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
