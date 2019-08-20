import AssetType from '../AssetType';
import { Point, Asset, AssetAttribute } from '..';

export default class TextAsset implements Asset<string> {
    public type = AssetType.Text;
    public style = { borderStyle: 'solid', borderWidth: 0 };
    constructor(
        public id: number,
        public width: number,
        public height: number,
        public position: Point,
        public value: string = '',
        public attribute: AssetAttribute = { angle: 0 }
    ) { }
}