import * as React from 'react';
import * as Enzyme from 'enzyme';
import { ContextMenu } from '../ContextMenu';

describe('<ContextMenu />', () => {
    const menu = [
        { label: '맨 앞으로 가져오기', shortcut: 'SHIFT + CTRL + ]', onClick: () => alert('aa') },
        { label: '앞으로 가져오기', shortcut: 'CTRL + ]', onClick: () => alert('aa') },
        { label: '뒤로 보내기', shortcut: 'CTRL + [', onClick: () => alert('aa') },
        { label: '맨 뒤로 보내기', shortcut: 'SHIFT + CTRL + [', onClick: () => alert('aa') },
    ];
    it('should match snapshot', () => {
        const wrapper = Enzyme.shallow(<ContextMenu visible={true} menu={menu} position={{ x: 10, y: 10 }} />);
        expect(wrapper).toMatchSnapshot();
    });
});