import {DefaultTheme} from 'types';

export const darkTheme: DefaultTheme = {
  baseColors: {
    orange: '#ff8902',
    darkBlue: '#1f2138',
  },
  palette: {
    background: '#1f2138',
    button: {
      background: '#008ef4',
      label: '#ffffff',
    },
    highlights: {
      border: '#ff8100',
    },
  },
};

export const lightTheme: DefaultTheme = {
  palette: {
    background: '#F9F6EE',
  },
};

export const defaultTheme = darkTheme;
