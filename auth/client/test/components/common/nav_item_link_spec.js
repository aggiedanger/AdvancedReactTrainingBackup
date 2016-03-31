import { renderComponent, expect } from '../../test_helper';
import NavItemLink from '../../../src/components/common/nav_item_link';

const LINK_TEXT = 'testing the link text';

describe('nav item link', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(NavItemLink, {txt: LINK_TEXT, path: '/'});
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  describe('list item', () => {
    it('should have a role of presentation', () => {
      expect(component).to.have.attr('role', 'presentation');
    });
  });

  describe('anchor tag', () => {
    it('should contain an anchor tag', () => {
      expect(component.find('a')).to.exist;
    });

    it('should only contain 1 anchor tag', () => {
      expect(component.find('a').length).to.eql(1);
    });

    it('should contain the passed in text', () => {
      expect(component.find('a')).to.contain(LINK_TEXT);
    });

    it('should have a role of presentation', () => {
      expect(component.find('a')).to.have.attr('role', 'presentation');
    });
  });

})
