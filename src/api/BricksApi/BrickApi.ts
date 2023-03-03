import {httpClient, endpoints} from 'api';
import Config from 'react-native-config';
import {FigurePartsResponse, LegoMiniFigsResponse} from 'types';

export class BrickApi {
  static PAGE_SIZE = 400;

  static getHarryPotterMiniFigs(): Promise<LegoMiniFigsResponse> {
    return httpClient.get(endpoints.minifigs, {
      params: {
        in_theme_id: Config.HARRY_POTTER_THEME_ID,
        page_size: this.PAGE_SIZE,
      },
    });
  }

  static getPartsForMiniFigure(figureId: string): Promise<FigurePartsResponse> {
    return httpClient.get(endpoints.partsForMinifig(figureId));
  }
}
