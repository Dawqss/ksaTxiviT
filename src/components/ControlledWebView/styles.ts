import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import {styled} from 'utils';

export const StyledContainer = styled(SafeAreaView)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const StyledWebView = styled(WebView)`
  flex: 1;
`;
