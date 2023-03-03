export const endpoints = {
  minifigs: '/lego/minifigs/',
  partsForMinifig: (figureId: string) => `/lego/minifigs/${figureId}/parts/`,
  summary: '/summary',
};
