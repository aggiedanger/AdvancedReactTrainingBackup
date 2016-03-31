import { expect } from '../../test_helper';
import authenticationReducer from '../../../src/reducers/auth/authentication';
import { AUTHORIZE, LOGOUT } from '../../../src/actions/types';

const INITIAL_STATE = {
  authorized: false,
  token: ''
}

const auth_payload = {
  data: {token: 'some token'}
}

describe('auth reducer', () => {
  it('handles null inputs', () => {
    const STATE = authenticationReducer();
    expect(STATE).to.eql(INITIAL_STATE);
  });

  it('handles default actions', () => {
    const STATE = authenticationReducer(undefined, {type: 'someaction'});
    expect(STATE).to.eql(INITIAL_STATE);
  });

  describe('authorize', ()=> {
    it('updates state with proper authentication', () => {
      const STATE = authenticationReducer(undefined, { type: AUTHORIZE, payload:auth_payload });
      expect(STATE).to.eql({token: 'some token', authorized:true });
    });
  });

  describe('logout', () => {
    it('should erase the authentication data', () => {
      const STATE = authenticationReducer(undefined, { type: LOGOUT, payload: {}});
      expect(STATE).to.eql(INITIAL_STATE);
    });
  });


})
