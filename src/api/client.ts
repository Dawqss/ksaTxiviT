import axios from 'axios';
import Config from 'react-native-config';

export const httpClient = axios.create({
  baseURL: Config.API_URL,
});
