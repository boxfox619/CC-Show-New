import * as React from 'react';
import * as Enzyme from 'enzyme';
import IconButton from '../IconButton';

describe('<IconButton />', () => {
  const mockFn = jest.fn();
  it('should match snapshot', () => {
    const wrapper = Enzyme.shallow(<IconButton icon="https://avatars0.githubusercontent.com/u/14067209?s=88&v=4" onClick={mockFn}/>);
    expect(wrapper).toMatchSnapshot();
  });
});