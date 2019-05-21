export {ContextMenu} from './ContextMenu';

type action = () => void;

export class Menu {
    constructor(
        public label: string,
        public shortcut?: string,
        public actions: action[] = [],
        public disabled: boolean = false,
        public subMenus?: Menu[])
        {}
}