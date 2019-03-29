import PointModel from './PointModel';

export default class AssetModel {
    constructor(
        public id: number,
        public type: string,
        public width: number,
        public height: number,
        public position: PointModel,
    ) {}
}