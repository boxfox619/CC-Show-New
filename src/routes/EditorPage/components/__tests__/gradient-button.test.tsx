import * as React from 'react';
import * as Enzyme from 'enzyme';
import GradientButtonItem from '../GradientButtonItem';

describe('<GradientButtonItem />', () => {
  it('should render one <div> & div label', () => {
    const wrapper = Enzyme.shallow(<GradientButtonItem label={'라벨'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});