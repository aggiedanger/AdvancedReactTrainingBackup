import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {

  let component;
  const INITIAL_COMMENTS = ['test'];

  beforeEach(() => {
    component = renderComponent(App, null, {comments: ['test']});
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  })

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
