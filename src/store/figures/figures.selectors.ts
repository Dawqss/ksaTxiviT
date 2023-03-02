import {Store} from 'types';

export const getFigureById = (id: string) => (state: Store) =>
  state.figures.byId[id];

export const getAllFiguresIds = (state: Store) => state.figures.allIds;
