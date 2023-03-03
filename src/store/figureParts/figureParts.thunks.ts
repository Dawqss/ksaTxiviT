import {createAsyncThunk} from '@reduxjs/toolkit';
import {BrickApi} from 'api';

export const fetchPartsByFigureId = createAsyncThunk<any, string>(
  'figureParts/fetchParts',
  async (figureId, {rejectWithValue}) => {
    try {
      return await BrickApi.getPartsForMiniFigure(figureId);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
