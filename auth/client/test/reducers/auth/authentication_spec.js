import { expect } from '../../test_helper';
import authenticationReducer from '../../../src/reducers/auth/authentication';
import { AUTHORIZE } from '../../../src/actions/types';

const INITIAL_STATE = {
  authorized: false,
  token: ''
}

const auth_payload = {
  token: 'some token'
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

  it('updates state with proper authentication', () => {
    const STATE = authenticationReducer(undefined, { type: AUTHORIZE, payload:auth_payload });
    expect(STATE).to.eql({token: 'some token', authorized:true });
  });


})
