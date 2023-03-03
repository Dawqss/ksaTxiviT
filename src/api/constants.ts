export const endpoints = {
  minifigs: '/lego/minifigs/',
  partsForMinifig: (figureId: string) =>
    `/api/v3/lego/minifigs/${figureId}/parts/`,
};
