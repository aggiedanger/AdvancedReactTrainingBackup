import CommentsReducer from '../../src/reducers/comments-reducer';
import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('CommentsReducer', () => {

  describe('saveComment case', () => {
    let action;

    beforeEach(() => {
      action = {
        type: SAVE_COMMENT
      }
    });

    it('updates comment list with new comment', () => {
      action.payload='new comment';
      const STATE = CommentsReducer(undefined, action);

      expect(STATE).to.eql(['new comment']);
    });

    it('handles null value for comment', () => {
      action.payload = null;
      const STATE = CommentsReducer(undefined, action);

      expect(STATE).to.eql([]);
    });

    it('handles undefined value for comment', () => {
      action.payload=undefined;
      const STATE = CommentsReducer(undefined, action);

      expect(STATE).to.eql([]);
    });

  });

  it('handles weird inputs', () => {
    const STATE = CommentsReducer();
    expect(STATE).to.eql([]);
  })

  it('returns default empty state', () => {
    const STATE = CommentsReducer(undefined, {type: 'init'});
    expect(STATE).to.eql([]);
  });
});
