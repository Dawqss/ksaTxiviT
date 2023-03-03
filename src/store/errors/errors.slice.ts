import {createSlice} from '@reduxjs/toolkit';
import {omit} from 'lodash';
import {CommonError, ErrorsReducerState} from 'types';
import {mergeRejectedError} from './helpers';

const initialState: ErrorsReducerState = {
  errorsById: {},
  errorIds: [],
};

const slice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    addNewErrorToStack(state, errorAction: {payload: CommonError}) {
      state.errorsById = mergeRejectedError(state, errorAction.payload);
    },
    deleteErrorFromStackById(state, errorAction: {payload: string}) {
      state.errorsById = omit(state.errorsById, [errorAction.payload]);
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      (state, {error}) => {
        state.errorsById = mergeRejectedError(state, error as CommonError);
      },
    );
  },
});

export const {
  reducer: errorsReducer,
  actions: {addNewErrorToStack, deleteErrorFromStackById},
} = slice;
