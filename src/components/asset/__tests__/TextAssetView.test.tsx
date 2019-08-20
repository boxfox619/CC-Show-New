import * as React from 'react';
import * as Enzyme from 'enzyme';
import TextAssetView from '../TextAssetView';

describe('<TextAssetView />', () => {
    const mockFn = jest.fn();
    it('should match snapshot', () => {
        const wrapper = Enzyme.shallow(<TextAssetView
            assetId={123}
            controllable={false}
            value="text"
            editing={false}
            handleChange={mockFn} />);
        expect(wrapper).toMatchSnapshot();
    });
});