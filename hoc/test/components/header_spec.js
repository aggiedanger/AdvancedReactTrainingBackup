import { expect, renderComponent } from '../test_helper';
import Header from '../../src/components/header';

describe('Header', () => {

  let component;

  describe('header when authentiated is true', () => {

    beforeEach(() => {
      component = renderComponent(Header, null, {authenticated: true});
    });

    it('has the text sign in', () => {
      expect(component.find('button')).to.contain('Sign Out');
    })
  });

  describe('header when authentiated is false', () => {

    beforeEach(() => {
      component = renderComponent(Header, null, {authenticated: false});
    });

    it('has the text Sign In', () => {
      expect(component.find('button')).to.contain('Sign In');
      // expect(component.find('nav')).to.have.class('navbar navbar-light');
      // expect(component.find('nav')).to.have.class('navbar-light');
    })
  });

});
