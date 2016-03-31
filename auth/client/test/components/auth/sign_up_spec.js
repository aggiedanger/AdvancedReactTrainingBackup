import { renderComponent, expect } from '../../test_helper';
import Signup from '../../../src/components/auth/sign-up';
import sinon from 'sinon';
import axios from 'axios';

describe('login page', () => {

  let component;

  beforeEach(() => {
    sinon.stub(axios, 'get');
    component = renderComponent(Signup);
  });

  afterEach(() => {
    axios.get.restore();
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  it('contains proper title', () => {
    expect(component.find('#title')).to.contain('Sign Up');
  });
});
