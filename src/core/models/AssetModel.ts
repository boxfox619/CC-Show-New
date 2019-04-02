import PointModel from './PointModel';
import { CSSProperties } from 'react';

export default class AssetModel {
    constructor(
        public id: number,
        public type: string,
        public width: number,
        public height: number,
        public position: PointModel,
        public value: any = '',
        public attr: any = {},
        public style: CSSProperties = {}
    ) {}
}