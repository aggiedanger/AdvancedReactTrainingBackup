import { renderComponent, expect } from '../test_helper';
import Header from '../../src/components/header';
import sinon from 'sinon';
import axios from 'axios';

describe('header', () => {
  let component;

  beforeEach(() => {
    sinon.stub(axios, 'get');
    component = renderComponent(Header);
  });

  afterEach(() => {
    axios.get.restore();
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  it('contains a signup link', () => {
    expect(component).to.contain('Sign Up');
  });

  it('contains a login link', () => {
    expect(component).to.contain('Login');
  });
});
