import { expect, renderComponent } from '../test_helper';
import Resources from '../../src/components/resources';

describe('resources', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Resources);
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  it('contains a list', () => {
    expect(component.find('ul')).to.exist;
  });

  it('has 3 steps in list', () => {
    expect(component.find('li').length).to.equal(3);
  })
});
