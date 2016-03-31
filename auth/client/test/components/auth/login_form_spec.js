import { renderComponent, expect } from '../../test_helper';
import LoginFields from '../../../src/components/auth/login_fields';
import sinon from 'sinon';
import axios from 'axios';

describe('login page', () => {

  let component;

  beforeEach(() => {
    sinon.stub(axios, 'get');
    component = renderComponent(LoginFields, {title: 'some title'});
  });

  afterEach(() => {
    axios.get.restore();
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  it('has the proper title', () => {
    expect(component.find('#title')).to.contain('some title');
  })

  it('contains two text fields', () => {
    expect(component.find('input').length).to.eql(2);
  });

  describe('email text field', () => {

    it('validates the user inputted some text', () => {
        component.find('button').simulate('submit');
        expect(component.find('#email-error')).to.contain('Enter an email');
    });

  });

  describe('password text field', () => {
    it('is a password field', () => {
      expect(component.find('#password')).to.have.attr('type', 'password');
    });

    it('validates the user inputted some text', () => {
        component.find('button').simulate('submit');
        expect(component.find('#password-error')).to.contain('Enter a password');
    });
  });

});
