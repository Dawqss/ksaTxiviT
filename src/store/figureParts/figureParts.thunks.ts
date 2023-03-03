import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiErrorKeys, BrickApi} from 'api';
import {addNewErrorToStack} from 'store';
import {ErrorResponse, FigurePartsResponse} from 'types';
import {createCommonError} from 'utils';

export const fetchPartsByFigureId = createAsyncThunk<
  FigurePartsResponse,
  string
>('figureParts/fetchParts', async (figureId, {dispatch}) => {
  try {
    return await BrickApi.getPartsForMiniFigure(figureId);
  } catch (error) {
    // rejectWithValue doesn't work with custom value at v1.9.3
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
});
