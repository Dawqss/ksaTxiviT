import {createSlice} from '@reduxjs/toolkit';
import {fetchPartsByFigureId} from 'store/figureParts/figureParts.thunks';

export interface FigurePartsSlice {
  allIds: string[];
  byId: Record<string, any>;
  error: any;
  isLoading: boolean;
}

const initialState: FigurePartsSlice = {
  allIds: [],
  byId: {},
  error: null,
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
      .addCase(fetchPartsByFigureId.fulfilled, (state, action) => {
        console.log('fetchPartsByFigureId', action);
        return {
          ...state,
        };
      });
  },
});

export const {reducer: figurePartsReducer} = slice;
