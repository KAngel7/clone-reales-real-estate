import axios from 'axios';
import { apiServer } from '../Config';

const storage: Storage = localStorage || window.localStorage;
var userToken: string | null = null;

export function getUserToken(): (string | null) {
  if (userToken) {
    return userToken;
  } else if (storage) {
    userToken = storage.getItem('user_token');
    return userToken;
  } else { return null; }
}

export function setUserToken(token: string | null): void {
  if (storage) {
    if (token) {
      storage.setItem('user_token', token);
    } else { storage.removeItem('user_token'); }
    userToken = token;
  }
}

export function getAuthToken() {
  return axios.get(apiServer + '/api/user', { headers: { token: userToken } });
}