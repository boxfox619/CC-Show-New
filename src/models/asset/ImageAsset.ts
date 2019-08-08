import AssetType from '../AssetType';
import { Asset, Point } from '..';

export default class ImageAsset implements Asset<string, any> {
    public type = AssetType.Image;
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