import {ApiErrorKeys} from 'api';
import {AxiosError, AxiosResponse} from 'axios';

export type CommonError = {
  id: string;
  message: string;
  type: 'error' | 'warning';
  status: string;
  actionName?: ApiErrorKeys;
};

export type ErrorResponse = {
  data: AxiosResponse['request']['response'];
  message: AxiosError;
};
