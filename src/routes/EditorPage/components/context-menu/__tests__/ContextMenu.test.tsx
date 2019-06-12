import * as React from 'react';
import * as Enzyme from 'enzyme';
import { Menu, ContextMenu } from '../';

describe('<ContextMenu />', () => {
    const menu = [
        new Menu('맨 앞으로 가져오기', 'SHIFT + CTRL + ]', [] ),
        new Menu('앞으로 가져오기', 'CTRL + ]', []),
        new Menu('뒤로 보내기', 'CTRL + [', []),
        new Menu('맨 뒤로 보내기', 'SHIFT + CTRL + [', [])
    ];
    it('should match snapshot', () => {
        const wrapper = Enzyme.shallow(<ContextMenu visible={true} menu={menu} position={{ x: 10, y: 10 }} />);
        expect(wrapper).toMatchSnapshot();
    });
});