import { AUTHORIZE, LOGOUT } from '../../actions/types';

const INITIAL_STATE = {
  authorized: false,
  token: ''
}

export default function(state=INITIAL_STATE, action={}){
  switch(action.type){
    case AUTHORIZE:
      return handleAuth(action.payload);
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }

  return state;
}

function handleAuth(payload){
  console.log(payload);
  if(payload.data && payload.data.token && payload.data.token != ''){
    return{token: payload.token, authorized: true};
  }

  return {
    token: '',
    authorized: false
  }
}
