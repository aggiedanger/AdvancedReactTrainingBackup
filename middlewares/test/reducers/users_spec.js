import { expect } from '../test_helper';
import { FETCH_USERS } from '../../src/actions/types';
import usersReducer from '../../src/reducers/users';

describe('users reducer', () => {
  describe('FETCH_USERS action', () => {
    let action = {
      type: FETCH_USERS
    }
  });

  it('handles no inputs', () => {
    const STATE = usersReducer();
    expect(STATE).to.eql([]);
  });

  it('return default state', () => {
    const STATE = usersReducer(undefined, {type: 'init'});
    expect(STATE).to.eql([]);
  });


});
