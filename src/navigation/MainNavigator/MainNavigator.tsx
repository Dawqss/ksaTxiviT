import {NavigationContainer} from '@react-navigation/native';
import {BackButton} from 'components';
import React from 'react';
import {FigureCarouselScreen, ShippingFormScreen, WebViewScreen} from 'screens';
import {SummaryScreen} from 'screens/SummaryScreen/SummaryScreen';
import {mainScreenOptions, MainStack, Routes} from '../constants';

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={Routes.FigureCarousel}>
        <MainStack.Group>
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
        </MainStack.Group>
        <MainStack.Group screenOptions={{presentation: 'transparentModal'}}>
          <MainStack.Screen
            name={Routes.SummaryScreen}
            component={SummaryScreen}
          />
        </MainStack.Group>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

// <RootStack.Group>
//   <RootStack.Screen name="Home" component={HomeScreen} />
//   <RootStack.Screen name="Details" component={DetailsScreen} />
// </RootStack.Group>
// <RootStack.Group screenOptions={{ presentation: 'modal' }}>
//   <RootStack.Screen name="MyModal" component={ModalScreen} />
// </RootStack.Group>
