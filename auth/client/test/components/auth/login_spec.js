import { renderComponent, expect } from '../../test_helper';
import Login from '../../../src/components/auth/login';
import sinon from 'sinon';
import axios from 'axios';

describe('login page', () => {

  let component;

  beforeEach(() => {
    sinon.stub(axios, 'get');
    component = renderComponent(Login);
  });

  afterEach(() => {
    axios.get.restore();
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  it('contains proper title', () => {
    expect(component.find('#title')).to.contain('Login');
  });
});
