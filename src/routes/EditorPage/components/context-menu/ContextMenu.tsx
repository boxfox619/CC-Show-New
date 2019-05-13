import * as React from 'react';
import { MenuContainer, MenuContent, Option, ShortCut } from './styles';

interface Menu {
    label: string
    shortcut?: string
    subMenus?: Menu[]
    disabled?: boolean
    onClick?: () => void
}

interface Props {
    visible: boolean,
    menu: Menu[]
}

const createMenu = (menus: Menu[], left?: number, top?: number) => {
    return (
        <MenuContainer left={left} top={top}>
            <MenuContent>
                {menus.map(m => (
                    <Option onClick={m.onClick} disabled={m.disabled}>
                        {m.label}
                        {m.shortcut && (<ShortCut>{m.shortcut}</ShortCut>)}
                        {m.subMenus && createMenu(m.subMenus)}
                    </Option>
                ))}
            </MenuContent>
        </MenuContainer>
    )
}

export const ContextMenu: React.FC<Props> = ({visible, menu}) => {
    return createMenu(menu, 0, 0);
}