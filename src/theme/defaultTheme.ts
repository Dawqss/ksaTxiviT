import {DefaultTheme} from 'types';

export const darkTheme: DefaultTheme = {
  baseColors: {
    orange: '#ff8902',
    darkBlue: '#1f2138',
    white: '#ffffff',
    grey: '#d3d3d3',
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

// export const lightTheme: DefaultTheme = {
//   palette: {
//     background: '#F9F6EE',
//   },
// };

export const defaultTheme = darkTheme;
