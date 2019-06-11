import * as React from 'react';
import * as Enzyme from 'enzyme';
import GuidelineModel from '../../../models/Guideline';
import { Guideline } from '../Guideline';

describe('<Guideline />', () => {
    it('should match snapshot', () => {
        const guideline = new GuidelineModel(0, 0, 0, 0);
        const wrapper = Enzyme.shallow(<Guideline key={"test"} attr={guideline}/>);
        expect(wrapper).toMatchSnapshot();
    });
});