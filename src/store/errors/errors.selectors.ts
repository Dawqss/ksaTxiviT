import {Store} from 'types';

export const getErrorsStack = (state: Store) =>
  Object.values(state.errors.errorsById);
