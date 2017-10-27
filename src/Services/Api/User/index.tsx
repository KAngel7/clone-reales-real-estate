import axios from 'axios';
import { apiServer } from '../Config';

export const userAxios = axios.create({
  baseURL: apiServer + '/api/user/',
});
const errorHandler = (err: any) => {
  if (err.response && err.response.data) {
    // tslint:disable-next-line:no-console
    console.log(err.response.data);
    return err.response.data;
  }
  return null;
};

/***********************************/
/************* Register ************/
/***********************************/

export interface RegisterData {
  name: {
    familyName: string;
    givenName: string;
  };
  userName: string;
  password: string;
  address: {
    number: string;
    street: string;
    district: string;
    country: string;
    countryCode: string;
  }[];
  emails: {
    value: string;
    active: boolean;
  }[];
  groups: {
    id: number;
    name: string
  }[];
}
export async function register(data: RegisterData) {
  try {
    const registerResponse = await userAxios.post('register', data);
    if (registerResponse && registerResponse.data) {
      return registerResponse.data;
    }
  } catch (err) {
    errorHandler(err);
  }
  return null;
}

/***********************************/
/************* Login ***************/
/***********************************/

export interface LoginData {
  userName: string;
  password: string;
}
export async function login(data: LoginData) {
  try {
    const loginResponse = await userAxios.put('login', data);
    if (loginResponse && loginResponse.data) {
      return loginResponse.data;
    }
  } catch (err) {
    errorHandler(err);
  }
  return null;
}

/***********************************/
/************* Active **************/
/***********************************/

export interface ActiveData {
  email: string;
  verifycode: string;
}
export async function active(data: ActiveData) {
  try {
    const activeResponse = await userAxios.put('active-account', data);
    if (activeResponse && activeResponse.data) {
      return activeResponse.data;
    }
  } catch (err) {
    errorHandler(err);
  }
  return null;
}
