import { CHANGE_AUTH } from '../actions/types';

export default function(state=false, action={}){
  switch(action.type){
    case CHANGE_AUTH:
      return state ? false : true;
    default:
      return state;
  }

  return state;
}
