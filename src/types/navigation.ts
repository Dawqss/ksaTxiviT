import {Routes} from 'navigation';

type NoParams = undefined;

export type MainStackParams = {
  [Routes.FigureCarousel]: NoParams;
  [Routes.WebView]: {uri: string};
};
