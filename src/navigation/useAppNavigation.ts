import {NavigationProp} from '@react-navigation/core/src/types';
import {useNavigation} from '@react-navigation/native';
import {MainStackParams} from 'types';

export const useAppNavigation = () =>
  useNavigation<NavigationProp<MainStackParams>>();
