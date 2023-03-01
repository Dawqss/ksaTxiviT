// Here you can find what it does -> https://styled-components.com/docs/api#typescript
// eslint-disable-next-line import/no-namespace
import * as styledComponents from 'styled-components/native';
import {DefaultTheme} from 'types';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<DefaultTheme>;

export {css, ThemeProvider, styled};
