import axios from 'axios';
import Config from 'react-native-config';

export const httpClient = axios.create({
  baseURL: Config.API_URL,
});

httpClient.interceptors.request.use(config => {
  const token = Config.BRICKABLE_API_KEY;
  if (token) {
    config.headers.Authorization = `key ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use(res => {
  if (res.headers['content-type'] === 'text/html') {
    throw new Error('UNEXPECTED_ERROR_MESSAGE');
  }

  return res.data;
});
