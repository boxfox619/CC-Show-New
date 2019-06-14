import { CSSProperties } from 'react';
import AssetType from '../AssetType';
import Point from '../Point';

export default class Asset {
    constructor(
        public id: number,
        private assetType: AssetType,
        public width: number,
        public height: number,
        public position: Point,
        public value: any = '',
        public attr: any = {},
        public style: CSSProperties = { borderStyle: 'solid', borderWidth: 0 }
    ) { }

    get type() {
        return this.assetType;
    }
}