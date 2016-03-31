import {AUTHORIZE, LOGUT} from './types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3090/'

export function login({email, password}){
  let request = axios.post(`${ROOT_URL}signin`, {email, password});

  return{
    type: AUTHORIZE,
    payload: request
  }
}

export function signup({email, password}){
  let request = axios.post(`${ROOT_URL}signup`, {email, password});

  return{
    type: AUTHORIZE,
    payload: request
  }
}

export function logout(){
  return{
    type: LOGOUT,
    payload: {}
  }
}
