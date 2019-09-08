import * as React from 'react';
import * as Enzyme from 'enzyme';
import { AssetView } from '../Asset';
import TextAsset from '../../../models/asset/TextAsset';

describe('<AssetView />', () => {
    const mockFn = jest.fn();
    it('should match snapshot', () => {
        const asset = new TextAsset(1, 100, 100, { x: 1, y: 1 }, 'value');
        const wrapper = Enzyme.shallow(<AssetView
            data={asset}
            index={1}
            isHovered={false}
            isSelected={false}
            controllable={true}
            onMouseHover={mockFn}
            isDoubleClicked={false}
            onValueChange={mockFn} />);
        expect(wrapper).toMatchSnapshot();
    });
});