import * as React from 'react';
import * as Enzyme from 'enzyme';
import SlidePreview from './../SlidePreview';
import SlideModel from './../../../models/SlideModel';

describe('<SlidePreview />', () => {
  const mockFn = jest.fn();
  it('should match snapshot', () => {
    const mock = new SlideModel(0, '테스트슬라이드', [], 'https://avatars0.githubusercontent.com/u/14067209?s=88&v=4', 0);
    const wrapper = Enzyme.shallow(<SlidePreview idx={1} slide={mock} active={false} onClick={mockFn} onShare={mockFn} onCopy={mockFn} onDelete={mockFn} />);
    expect(wrapper).toMatchSnapshot();
  });
});