import {store} from 'store';
import {FigurePart, LegoFigure} from 'types/bricksApi';
import {CommonError} from 'types/error';

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface FiguresSlice {
  allIds: string[];
  byId: Record<string, LegoFigure>;
  isLoading: boolean;
}

export interface FigurePartsSlice {
  allIds: string[];
  byId: Record<string, FigurePart>;
  isLoading: boolean;
}

export interface ErrorsReducerState {
  errorsById: Record<string, CommonError>;
  errorIds: string[];
}
