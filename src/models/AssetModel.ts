import PointModel from './PointModel';
import { CSSProperties } from 'react';
import AssetType from './AssetType';

export default class AssetModel {
    constructor(
        public id: number,
        public type: AssetType,
        public width: number,
        public height: number,
        public position: PointModel,
        public value: any = '',
        public attr: any = {},
        public style: CSSProperties = {}
    ) {}
}