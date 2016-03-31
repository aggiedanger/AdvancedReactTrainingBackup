import { FETCH_USERS } from './types';
import axios from 'axios';

const URL = 'http://jsonplaceholder.typicode.com/users';

export function fetchUsers(){

  let request = axios.get(URL);

  return{
    type: FETCH_USERS,
    payload: request
  }
}
