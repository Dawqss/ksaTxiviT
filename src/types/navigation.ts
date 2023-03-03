import {Routes} from 'navigation';
import {ShippingForm} from 'types/shippingForm';

type NoParams = undefined;

export type MainStackParams = {
  [Routes.FigureCarousel]: NoParams;
  [Routes.WebView]: {uri: string};
  [Routes.ShippingForm]: {figureId: string};
  [Routes.SummaryScreen]: {shippingForm: ShippingForm; figureId: string};
};
