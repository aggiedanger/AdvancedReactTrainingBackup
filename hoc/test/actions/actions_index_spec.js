import { expect } from '../test_helper';
import { authenticate } from '../../src/actions';
import { CHANGE_AUTH } from '../../src/actions/types'

describe('actions', () => {

  it('returns an object with type CHANGE_AUTH', () => {
    const action = authenticate();
    expect(action.type).to.eql(CHANGE_AUTH);
  });

  it('handles weird parameters', () => {
    const action = authenticate('drop * from *', ['nefariousStuff'], {kill: 'kill9'});
    expect(action).to.eql({type: CHANGE_AUTH});
  })
})
