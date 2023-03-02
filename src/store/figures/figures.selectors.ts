import sampleSize from 'lodash.samplesize';
import {Store} from 'types';

export const getFiguresById = (id: string) => (state: Store) =>
  state.figures.byId[id];

export const getRandomFiguresId = (size: number) => (state: Store) => {
  return sampleSize(state.figures.allIds, size);
};
