import {DefaultTheme} from 'types';

export const darkTheme: DefaultTheme = {
  baseColors: {
    orange: '#ff8902',
    darkBlue: '#1f2138',
    white: '#ffffff',
    grey: '#d3d3d3',
    red: '#ff726f',
  },
  palette: {
    background: {
      main: '#1f2138',
      card: '#ffffff',
    },
    button: {
      background: '#008ef4',
      label: '#ffffff',
    },
    highlights: {
      border: '#ff8100',
    },
  },
};

export const defaultTheme = darkTheme;
