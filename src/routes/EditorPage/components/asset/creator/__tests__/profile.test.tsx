import * as React from 'react';
import * as Enzyme from 'enzyme';
import Profile from './../Profile';

describe('<GradientButtonItem />', () => {
  it('should match snapshot', () => {
    const wrapper = Enzyme.shallow(<Profile thumbnail="" name="홍길동" subName="치킨비어"/>);
    expect(wrapper).toMatchSnapshot();
  });
});