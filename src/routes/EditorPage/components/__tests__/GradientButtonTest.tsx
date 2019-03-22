import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import GradientButtonItem from '../GradientButtonItem';

Enzyme.configure({ adapter: new Adapter() })
describe('<GradientButtonItem />', () => {
  it('should render one <div>', () => {
    const wrapper = Enzyme.shallow(<GradientButtonItem label={'라벨'} activated={false} />);
    expect(wrapper.find('div')).toHaveLength(1);
  });
});