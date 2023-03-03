import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiErrorKeys} from 'api';
import {BrickApi} from 'api/BricksApi/BrickApi';
import {addNewErrorToStack} from 'store';
import {ErrorResponse, LegoMiniFigsResponse} from 'types';
import {createCommonError} from 'utils';

export const fetchHarryPotterMiniFigs = createAsyncThunk<LegoMiniFigsResponse>(
  'figures/fetchHarryPotterMiniFigs',
  async (__, {dispatch}) => {
    try {
      return await BrickApi.getHarryPotterMiniFigs();
    } catch (error) {
      dispatch(
        addNewErrorToStack(
          createCommonError(
            error as ErrorResponse,
            ApiErrorKeys.FetchPartsByFigureId,
          ),
        ),
      );
      throw error;
    }
  },
);
