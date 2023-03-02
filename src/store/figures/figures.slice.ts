import {createSlice} from '@reduxjs/toolkit';
import {FiguresSlice} from 'types';
import {fetchHarryPotterMiniFigs} from '../figures/figures.thunks';

const initialState: FiguresSlice = {
  allIds: [],
  byId: {},
  error: null,
  isLoading: false,
};

const slice = createSlice({
  name: 'clubAbout',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHarryPotterMiniFigs.pending, state => ({
        ...state,
        error: null,
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
            ...byId,
            allIds,
          };
        },
      )
      .addCase(fetchHarryPotterMiniFigs.rejected, (state, {error}) => ({
        ...state,
        isLoading: false,
        error,
      }));
  },
});

export const {reducer: figuresReducer} = slice;
