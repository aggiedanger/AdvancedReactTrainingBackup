import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';
import sinon from 'sinon';
import axios from 'axios';

describe('App' , () => {
  let component;

  beforeEach(function() {
    sinon.stub(axios, 'get').returns({data: []});
    component = renderComponent(App, {}, {users: []});
  });

  afterEach(function() {
      axios.get.restore();
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
