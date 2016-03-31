import { combineReducers } from 'redux';
import authenticationReducer from './auth/authentication';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  form: formReducer
});

export default rootReducer;
