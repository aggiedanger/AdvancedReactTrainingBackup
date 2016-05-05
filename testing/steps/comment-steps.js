import {renderComponent, expect} from '../test/test_helper';
import CommentList from '../src/components/comment_list';

module.exports = function() {

  var component;

  this.When(/^'comment(\d+)' and 'comment(\d+)' and 'comment(\d+)' are available$/, function (arg1, arg2, arg3, callback) {

    component = renderComponent(CommentList, null,{comments: [arg1, arg2, arg3]});
    callback();

  })

  this.Then(/^html output should be expected$/, function (callback) {
    try{
      expect(component).to.have.class('comment-list');
      callback();
    }catch(error){
      callback(error);
    }
  })
}
