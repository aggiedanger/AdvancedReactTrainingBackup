import { expect, renderComponent } from '../test_helper';
import UserList from '../../src/components/user_list';

const DUMMY_STATE = [
  {
    name: 'Abbie',
    id: 1,
    email:'abbie@hometec.com',
    company: {
      name: 'hometec'
    }
  },
  {
    name: 'Caleb',
    id: 2,
    email:'caleb@hometec.com',
    company: {
      name: 'bank'
    }
  },
  {
    name: 'Beth',
    id: 3,
    email:'beth@hometec.com',
    company: {
      name: 'stes'
    }
  }
]


describe('user list',() => {
  let component;

  beforeEach(() => {
    component = renderComponent(UserList, {mock: true}, {users: DUMMY_STATE})
  });

  it('lists out all the users', () => {
    expect(component).to.exist;
  });

  it('contains right component class', () => {
    expect(component).to.have.class('user-list-container');
  });

  it('has keys on the list items', () => {
    //expect(component.find('.card')[0]).to.have.attr('key');
  });


})
