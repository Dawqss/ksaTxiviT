const commonMessage = 'Something went wrong, try again';

export enum ApiErrorKeys {
  FetchHarryPotterMiniFigs = 'FETCH_HARRY_POTTER_MINI_FIGS',
  FetchPartsByFigureId = 'FETCH_PARTS_BY_FIGURE_ID',
}

export const apiErrorMessages: Record<ApiErrorKeys, string> = {
  [ApiErrorKeys.FetchHarryPotterMiniFigs]: commonMessage,
  [ApiErrorKeys.FetchPartsByFigureId]: commonMessage,
};
