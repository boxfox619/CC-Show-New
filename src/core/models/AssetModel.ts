import PointModel from './PointModel';

export default class AssetModel {
    constructor(
        public id: number,
        public type: string,
        public position: PointModel
    ) {}
}