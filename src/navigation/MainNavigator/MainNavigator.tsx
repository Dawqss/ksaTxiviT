import {NavigationContainer} from '@react-navigation/native';
import {BackButton} from 'components';
import React from 'react';
import {FigureCarouselScreen, ShippingFormScreen, WebViewScreen} from 'screens';
import {mainScreenOptions, MainStack, Routes} from '../constants';

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={Routes.FigureCarousel}>
        <MainStack.Screen
          name={Routes.FigureCarousel}
          component={FigureCarouselScreen}
          options={mainScreenOptions}
        />
        <MainStack.Screen
          name={Routes.WebView}
          component={WebViewScreen}
          options={({navigation}) => ({
            headerLeft: () => <BackButton onPress={navigation.goBack} />,
            title: 'Details',
          })}
        />
        <MainStack.Screen
          name={Routes.ShippingForm}
          component={ShippingFormScreen}
          options={mainScreenOptions}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
