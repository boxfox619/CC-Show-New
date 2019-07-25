import * as React from 'react';
import { useCallback } from 'react';
import { Point } from '../../../../models';
import { Menu } from '.';
import { MenuContainer, MenuContent, Option, ShortCut, Submenu } from './styles';

interface Props {
    visible: boolean,
    menu: Menu[],
    position: Point
}

const createMenu = (menus: Menu[], left?: number, top?: number, visible: boolean = true) => {
    return (
        <MenuContainer left={left} top={top} visible={visible}>
            <MenuContent>
                {menus.map(m => {
                    const onClick = useCallback(() => { if (!m.disabled) { m.actions.map(action => action()) } }, [m.actions, m.disabled]);
                    return (
                        <Option key={m.label} onClick={onClick} disabled={m.disabled}>
                            {m.label}
                            {m.shortcut && (<ShortCut>{m.shortcut}</ShortCut>)}
                            <Submenu>{m.subMenus && createMenu(m.subMenus)}</Submenu>
                        </Option>
                    )
                })}
            </MenuContent>
        </MenuContainer>
    )
}

export const ContextMenu: React.FC<Props> = ({ visible, menu, position }) => {
    return createMenu(menu, position.x, position.y, visible);
}