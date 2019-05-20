import * as React from 'react';
import { PointModel } from 'src/models';
import { Menu } from '.';
import { MenuContainer, MenuContent, Option, ShortCut, Submenu } from './styles';

interface Props {
    visible: boolean,
    menu: Menu[],
    position: PointModel
}

const createMenu = (menus: Menu[], left?: number, top?: number, visible: boolean = true) => {
    return (
        <MenuContainer left={left} top={top} visible={visible}>
            <MenuContent>
                {menus.map(m => (
                    <Option onClick={m.onClick} disabled={(!m.subMenus) && (m.disabled || !m.onClick)}>
                        {m.label}
                        {m.shortcut && (<ShortCut>{m.shortcut}</ShortCut>)}
                        <Submenu>{m.subMenus && createMenu(m.subMenus)}</Submenu>
                    </Option>
                ))}
            </MenuContent>
        </MenuContainer>
    )
}

export const ContextMenu: React.FC<Props> = ({visible, menu, position}) => {
    return createMenu(menu, position.x, position.y, visible);
}