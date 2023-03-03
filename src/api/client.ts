import axios, {AxiosResponse} from 'axios';
import Config from 'react-native-config';
import {ErrorResponse} from 'types';

export const httpClient = axios.create({
  baseURL: Config.API_URL,
});

export const httpClientFakeServer = axios.create({
  baseURL: Config.FAKE_API_URL,
});

httpClient.interceptors.request.use(config => {
  const token = Config.BRICKABLE_API_KEY;
  if (token) {
    config.headers.Authorization = `key ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  res => {
    if (res.headers['content-type'] === 'text/html') {
      throw new Error('UNEXPECTED_ERROR_MESSAGE');
    }

    return res.data;
  },
  (response: AxiosResponse): ErrorResponse => {
    let data = response.request.response;
    try {
      data = JSON.parse(response.request.response);
    } catch (__) {}

    throw {
      data,
      message: response,
    };
  },
);
