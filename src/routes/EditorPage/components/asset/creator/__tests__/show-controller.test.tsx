import * as React from 'react';
import * as Enzyme from 'enzyme';
import ShowController from '../ShowController';

describe('<ShowController />', () => {
    const mockFn = jest.fn();
  it('should render one <div> & div label', () => {
    const wrapper = Enzyme.shallow(<ShowController addAsset={new mockFn()}/>);
    expect(wrapper).toMatchSnapshot();
  });
});