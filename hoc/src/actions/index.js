import { CHANGE_AUTH } from './types';

export function authenticate(){
  return{
    type: CHANGE_AUTH
  }
}
