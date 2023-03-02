import {createAsyncThunk} from '@reduxjs/toolkit';
import {BrickApi} from 'api/BrickApi';
import {LegoMiniFigsResponse} from 'types';

export const fetchHarryPotterMiniFigs = createAsyncThunk<LegoMiniFigsResponse>(
  'figures/fetchHarryPotterMiniFigs',
  async (page, {rejectWithValue}) => {
    try {
      return await BrickApi.getHarryPotterMiniFigs();
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error);
    }
  },
);
