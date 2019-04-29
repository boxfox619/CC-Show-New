import PointModel from 'src/models/PointModel';
export class ResizeAssetPayload {
    constructor(
        public id: number,
        public position: PointModel,
        public width: number,
        public height: number
    ){}
}