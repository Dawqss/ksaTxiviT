import {createSlice} from '@reduxjs/toolkit';
import {fetchPartsByFigureId} from 'store/figureParts/figureParts.thunks';
import {FigurePartsSlice} from 'types';

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
      .addCase(fetchPartsByFigureId.pending, () => ({
        ...initialState,
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
            isLoading: false,
          };
        },
      )
      .addCase(fetchPartsByFigureId.rejected, () => {
        return {
          ...initialState,
          isLoading: false,
        };
      });
  },
});

export const {reducer: figurePartsReducer} = slice;
