import {createSlice} from '@reduxjs/toolkit';
import {FiguresSlice} from 'types';
import {fetchHarryPotterMiniFigs} from '../figures/figures.thunks';

const initialState: FiguresSlice = {
  allIds: [],
  byId: {},
  isLoading: false,
};

const slice = createSlice({
  name: 'figures',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHarryPotterMiniFigs.pending, state => ({
        ...state,
        isLoading: true,
      }))
      .addCase(
        fetchHarryPotterMiniFigs.fulfilled,
        (state, {payload: {results}}) => {
          const allIds = results.map(({set_num}) => set_num);
          const byId = results.reduce((previousValue, currentValue) => {
            return {
              ...previousValue,
              [currentValue.set_num]: currentValue,
            };
          }, {});

          return {
            ...state,
            byId,
            allIds,
          };
        },
      )
      .addCase(fetchHarryPotterMiniFigs.rejected, state => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const {reducer: figuresReducer} = slice;
