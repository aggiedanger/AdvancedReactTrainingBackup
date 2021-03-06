import { FETCH_USERS } from '../actions/types';

export default function(state=[], action={payload: {}}){
  switch(action.type){
    case FETCH_USERS:
      return [ ...action.payload.data ];
    default:
      return state;
  }
}
