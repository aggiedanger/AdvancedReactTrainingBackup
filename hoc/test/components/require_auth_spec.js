import { expect, renderComponent } from '../test_helper';
import requireAuth from '../../src/components/require_authentication';
import Resources from '../../src/components/resources';

describe('require authentication', () => {
  let component;

  describe('when authenticated is true', () => {
    beforeEach(() => {
      component = renderComponent(requireAuth(Resources), null, {authenticated: true});
    });

    it('exists', () => {
      expect(component).to.exist;
    });

  });

  describe('when authenticated is false', () => {
    it('throws error', () => {
      let errorTxt;
      try{
        const component = renderComponent(requireAuth(Resources), null, { authenticated: false});
      }
      catch(error){
        errorTxt = error;
      }

      expect(errorTxt).to.exist;
    });
  });


});
