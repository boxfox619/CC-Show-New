import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import GradientButtonItem from '../GradientButtonItem';

Enzyme.configure({ adapter: new Adapter() })
describe('<GradientButtonItem />', () => {
  it('should render one <div> & div label', () => {
    const wrapper = Enzyme.shallow(<GradientButtonItem label={'라벨'}/>);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').find('div')).toHaveLength(1);
    expect(wrapper.find('div').find('div').text()).toEqual('라벨');
    /* wrapper.simulate("mouseover");
    expect(wrapper.find('div').find('div')).to.have.property('background', ''); */
  });
});