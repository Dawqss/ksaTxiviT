import {ApiErrorKeys} from 'api';
import {CommonError, ErrorResponse} from 'types';

export const createCommonError = (
  error: ErrorResponse,
  actionKey?: ApiErrorKeys,
): CommonError => {
  return {
    type: 'error',
    status: error.message.response?.status.toString() ?? 'unknown',
    message: String(error.message),
    id: (new Date().getTime() + Math.random()).toString(),
    actionName: actionKey,
  };
};
