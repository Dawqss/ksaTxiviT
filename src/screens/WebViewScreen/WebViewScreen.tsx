import {Routes} from 'navigation';
import React from 'react';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {MainStackParams} from 'types';
import {StyledWebView} from './styles';

type WebViewScreenNavigationProp = NativeStackScreenProps<
  MainStackParams,
  Routes.WebView
>;

export const WebViewScreen = ({
  route: {
    params: {uri},
  },
}: WebViewScreenNavigationProp) => {
  return <StyledWebView source={{uri}} />;
};
