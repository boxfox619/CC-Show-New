export {ContextMenu} from './ContextMenu';

export interface Menu {
    label: string
    shortcut?: string
    subMenus?: Menu[]
    disabled?: boolean
    onClick?: () => void
}