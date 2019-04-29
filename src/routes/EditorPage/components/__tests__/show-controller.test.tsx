import * as React from 'react';
import * as Enzyme from 'enzyme';
import ShowController from '../ShowController';

describe('<ShowController />', () => {
    const mockFn = jest.fn();
    it('should match snapshot', () => {
        const wrapper = Enzyme.shallow(<ShowController
            name="홍길동"
            email="치킨비어"
            thumbnail=""
            addAsset={new mockFn()}
            toggleAssetManager={new mockFn()}
            toggleSlideManager={new mockFn()}
            toggleSlideShow={new mockFn()} />);
        expect(wrapper).toMatchSnapshot();
    });
});