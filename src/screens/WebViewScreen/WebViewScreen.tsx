import {Routes} from 'navigation';
import React from 'react';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {MainStackParams} from 'types';
import {StyledWebView} from './styles';

type WebViewScreenNavigationProps = NativeStackScreenProps<
  MainStackParams,
  Routes.WebView
>;

export const WebViewScreen = ({
  route: {
    params: {uri},
  },
}: WebViewScreenNavigationProps) => {
  return <StyledWebView source={{uri}} />;
};
