import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParams} from 'types';

export const MainStack = createStackNavigator<MainStackParams>();

export enum Routes {
  FigureCarousel = 'FIGURE_CAROUSEL',
  WebView = 'WEB_VIEW',
  ShippingForm = 'SHIPPING_FORM',
}

export const mainScreenOptions = {
  headerShown: false,
};
