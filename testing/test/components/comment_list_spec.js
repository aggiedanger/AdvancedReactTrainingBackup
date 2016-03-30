import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  const props = { comments: ['comment1', 'comment2', 'comment3'] };

  beforeEach(() => {
    component = renderComponent(CommentList, null, props);
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  it('has proper class', () => {
    expect(component).to.have.class('comment-list');
  });

  it('contains all comments', () => {
    props.comments.map(comment => {
      expect(component).to.contain(comment);
    });
  });

  it('contains comments in an li', () => {
    expect(component.find('li').length).to.equal(3);
  });



});
