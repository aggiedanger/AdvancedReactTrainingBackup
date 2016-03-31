import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';
import sinon from 'sinon';

describe('App' , () => {
  let component;

  beforeEach(function() {
    console.log('thisss',this.xhr);
     this.xhr = sinon.useFakeXMLHttpRequest();
    //
         this.requests = [];
         this.xhr.onCreate = function(xhr) {
             this.requests.push(xhr);
         }.bind(this);
    component = renderComponent(App, {}, {users: []});
  });

  afterEach(function() {
        //this.xhr.restore();
    });


  it('renders something', () => {
    //expect(component).to.exist;
  });
});
