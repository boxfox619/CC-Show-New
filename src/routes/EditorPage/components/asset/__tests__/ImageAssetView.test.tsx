import * as React from 'react';
import * as Enzyme from 'enzyme';
import { ImageAssetView } from '../ImageAssetView';

describe('<ImageAssetView />', () => {
    it('should match snapshot', () => {
        const wrapper = Enzyme.shallow(<ImageAssetView value="https://cdn-images-1.medium.com/max/800/1*ScCQRqiRp2NZK0yHN-moGQ.jpeg" />);
        expect(wrapper).toMatchSnapshot();
    });
});