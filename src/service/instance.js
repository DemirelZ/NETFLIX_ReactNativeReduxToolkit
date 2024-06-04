import axios from 'axios';
import {BASE_URL} from './urls';
import {API_KEY, AuthorizationBearerKey} from '../utils/constants';

const Client = axios.create();

Client.defaults.baseURL = BASE_URL;

Client.defaults.params = {
  language: 'en-US',
  api_key: API_KEY,
};

Client.defaults.headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${AuthorizationBearerKey}`,
};

export default Client;
