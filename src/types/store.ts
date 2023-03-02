import {store} from 'store';
import {LegoFigure} from 'types/bricksApi';

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface FiguresSlice {
  allIds: string[];
  byId: Record<string, LegoFigure>;
  error: unknown;
  isLoading: boolean;
}
