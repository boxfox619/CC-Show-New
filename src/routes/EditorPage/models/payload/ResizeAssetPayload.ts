import PointModel from 'src/core/models/PointModel';
export class ResizeAssetPayload {
    constructor(
        public id: number,
        public position: PointModel,
        public width: number,
        public height: number
    ){}
}