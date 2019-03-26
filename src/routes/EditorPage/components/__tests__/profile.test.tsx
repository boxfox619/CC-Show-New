import * as React from 'react';
import * as Enzyme from 'enzyme';
import Profile from '../Profile';

describe('<Profile />', () => {
  it('should render one <div> & div label', () => {
    const wrapper = Enzyme.shallow(<Profile name={'홍길동'} subName={'치킨맥주'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});