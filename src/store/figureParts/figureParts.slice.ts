import {createSlice} from '@reduxjs/toolkit';
import {fetchPartsByFigureId} from 'store/figureParts/figureParts.thunks';
import {FigurePart} from 'types';

export interface FigurePartsSlice {
  allIds: string[];
  byId: Record<string, FigurePart>;
  isLoading: boolean;
}

const initialState: FigurePartsSlice = {
  allIds: [],
  byId: {},
  isLoading: false,
};

const slice = createSlice({
  name: 'figuresParts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPartsByFigureId.pending, state => ({
        ...state,
        error: null,
        isLoading: true,
      }))
      .addCase(
        fetchPartsByFigureId.fulfilled,
        (state, {payload: {results}}) => {
          const allIds = results.map(({id}) => id);
          const byId = results.reduce((previousValue, currentValue) => {
            return {
              ...previousValue,
              [currentValue.id]: currentValue,
            };
          }, {});
          return {
            ...state,
            allIds,
            byId,
          };
        },
      )
      .addCase(fetchPartsByFigureId.rejected, state => {
        return {
          ...state,
          isLoading: false,
        };
      });
  },
});

export const {reducer: figurePartsReducer} = slice;
