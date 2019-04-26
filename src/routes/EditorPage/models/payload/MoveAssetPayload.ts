import PointModel from 'src/core/models/PointModel';
export class MoveAssetPayload {
    constructor(
        public assetId: number,
        public point: PointModel
    ){}
}