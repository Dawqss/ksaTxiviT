import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import {styled} from 'utils';

export const StyledWebView = styled(WebView)`
  flex: 1;
`;

export const StyledContainer = styled(SafeAreaView)`
  flex: 1;
`;
