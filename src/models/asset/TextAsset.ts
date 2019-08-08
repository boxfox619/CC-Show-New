import AssetType from '../AssetType';
import { Point, Asset } from '..';

export default class TextAsset implements Asset<string, any> {
    public type = AssetType.Text;
    public style = { borderStyle: 'solid', borderWidth: 0 };
    constructor(
        public id: number,
        public width: number,
        public height: number,
        public position: Point,
        public value: string = '',
        public attribute: any = {},
    ) { }
}