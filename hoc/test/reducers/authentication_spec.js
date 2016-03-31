import { expect } from '../test_helper';
import authenticationReducer from '../../src/reducers/authentication';
import { CHANGE_AUTH } from '../../src/actions/types';

describe('authentication reducer', () => {
  describe('authenticate', () => {
    let action;
    beforeEach(() => {
      action = {
        type: CHANGE_AUTH
      }
    });

    it('updates state to true when initial state is false', () => {
      const STATE = authenticationReducer(false, action);
      expect(STATE).to.be.true;
    });

    it('updates state to true when initial state is true', () => {
      const STATE = authenticationReducer(true, action);
      expect(STATE).to.be.false;
    });
  });

  it('handles weird inputs', () => {
    const STATE = authenticationReducer();
    expect(STATE).to.be.false;
  });

  it('returns default false state', () => {
    const STATE = authenticationReducer(undefined, {type: 'init'});
    expect(STATE).to.be.false;
  });
})
