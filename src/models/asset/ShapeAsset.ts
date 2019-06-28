import AssetType from '../AssetType';
import { Asset, Point } from '..';
import { CSSProperties } from 'react';


export default class ShapeAsset implements Asset<string, any> {
    public type: AssetType = AssetType.Video;
    public style: CSSProperties = { borderStyle: 'solid', borderWidth: 0 };
    constructor(
        public id: number,
        public width: number,
        public height: number,
        public position: Point,
        public value: string = '',
        public attribute = {}
    ) { }
}