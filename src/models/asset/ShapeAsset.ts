import AssetType from '../AssetType';
import { Asset, Point } from '..';
import { CSSProperties } from 'react';
import { ShapeProps } from '../../core/assets/ShapeAsset';


export default class ShapeAsset implements Asset<React.ComponentType<ShapeProps>, any> {
    public type: AssetType = AssetType.Shape;
    public style: CSSProperties = { borderStyle: 'solid', borderWidth: 0 };
    constructor(
        public id: number,
        public width: number,
        public height: number,
        public position: Point,
        public value: React.ComponentType<ShapeProps>,
        public attribute = {}
    ) { }
}