import {apiErrorMessages} from 'api';
import {CommonError} from 'types';
import {ErrorsReducerState} from './errors.slice';

export const mergeRejectedError = (
  state: ErrorsReducerState,
  payload: CommonError,
): ErrorsReducerState['errorsById'] => {
  const isCustomMessage =
    payload.actionName && payload.actionName in apiErrorMessages;

  return {
    ...state.errorsById,
    [payload.id]: {
      ...payload,
      ...(isCustomMessage
        ? {message: apiErrorMessages[payload.actionName!]}
        : null),
    },
  };
};
