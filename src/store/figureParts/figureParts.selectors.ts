import {Store} from 'types';

export const getAllFigurePartsId = (state: Store) => state.figureParts.allIds;
export const getPartById = (id: string) => (state: Store) =>
  state.figureParts.byId[id];

export const getIsFigurePartsLoading = (state: Store) =>
  state.figureParts.isLoading;
