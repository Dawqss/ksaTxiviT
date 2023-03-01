import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParams} from 'types';

export const MainStack = createStackNavigator<MainStackParams>();

export enum Routes {
  FigureCarousel = 'FIGURE_CAROUSEL',
}

export const mainScreenOptions = {
  headerShown: false,
};
