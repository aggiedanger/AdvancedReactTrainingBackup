import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';
import { saveComment } from '../../src/actions';

describe('CommentBox', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {

    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment')
    });

    it('shows that text in textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    describe('button submit', () => {
      it('when submitted, clears the input', () => {
        component.find('button').simulate('submit');
        expect(component.find('textarea')).to.have.value('');
      });
    });

  });

});
