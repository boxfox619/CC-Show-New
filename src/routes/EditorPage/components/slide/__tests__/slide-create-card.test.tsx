import * as React from 'react';
import * as Enzyme from 'enzyme';
import SlideCreateCard from './../SlideCreateCard';

describe('<SlideCreateCard />', () => {
  const mockFn = jest.fn();
  it('should match snapshot', () => {
    const wrapper = Enzyme.shallow(<SlideCreateCard onClick={mockFn}/>);
    expect(wrapper).toMatchSnapshot();
  });
});