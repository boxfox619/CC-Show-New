import PointModel from './PointModel';

export class AssetModel {
    constructor(
        public id: number,
        public type: string,
        public position: PointModel
    ) {}
}