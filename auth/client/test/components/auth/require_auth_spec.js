import { expect, renderComponent } from '../../test_helper';
import requireAuth from '../../../src/components/auth/require_authentication';
import Home from '../../../src/components/home';

describe('require auth hoc', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(requireAuth(Home), null, {authentication: {authorized: true }});
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  describe('when authenticated is false', () => {
    it('throws error', () => {
      let errorTxt;
      try{
        const component = renderComponent(requireAuth(Home), null, {authentication: {authorized: false }});
      }
      catch(error){
        errorTxt = error;
      }

      expect(errorTxt).to.exist;
    });

  });

  describe('when authenticated is true', () => {
    it('displays proper component', () => {
      expect(component).to.have.class('home-container');
    });
  });
});
