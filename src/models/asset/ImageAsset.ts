import AssetType from '../AssetType';
import { Asset, Point, AssetAttribute } from '..';

export default class ImageAsset implements Asset<string> {
    public type = AssetType.Image;
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