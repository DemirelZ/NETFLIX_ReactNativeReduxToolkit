import axios from 'axios';
import {AuthorizationBearerKey} from '../utils/constants';

const Client = axios.create();

Client.defaults.baseURL = BASE_URL;

Client.defaults.params = {
  language: 'en-US',
};

Client.defaults.headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${AuthorizationBearerKey}`,
};

export default Client;
