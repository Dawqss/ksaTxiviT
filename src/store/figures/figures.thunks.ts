import {createAsyncThunk} from '@reduxjs/toolkit';
import {BrickApi} from 'api/BricksApi/BrickApi';
import {LegoMiniFigsResponse} from 'types';

export const fetchHarryPotterMiniFigs = createAsyncThunk<LegoMiniFigsResponse>(
  'figures/fetchHarryPotterMiniFigs',
  async (page, {rejectWithValue}) => {
    try {
      return await BrickApi.getHarryPotterMiniFigs();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
