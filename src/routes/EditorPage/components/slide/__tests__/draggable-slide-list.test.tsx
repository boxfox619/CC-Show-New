import * as React from 'react';
import * as Enzyme from 'enzyme';
import DraggableSlideList from '../DraggableSlideList';
import SlideModel from '../../../models/store/SlideModel';

describe('<IconButton />', () => {
  const url = 'https://avatars0.githubusercontent.com/u/14067209?s=88&v=4';
  const mockFn = jest.fn();
  it('should match snapshot', () => {
    const wrapper = Enzyme.shallow(
      <DraggableSlideList
        selectedSlideId={0}
        slides={[new SlideModel(0, '테스트 슬라이드', url), new SlideModel(1, '테스트 슬라이드2', url)]}
        exchangeSlide={mockFn} 
        selectSlide={mockFn}
        copySlide={mockFn}
        createSlide={mockFn}
        shareSlide={mockFn}
        deleteSlide={mockFn}
        />
      );
    expect(wrapper).toMatchSnapshot();
  });
});