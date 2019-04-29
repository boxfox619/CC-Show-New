import PointModel from 'src/models/PointModel';
export class MoveAssetPayload {
    constructor(
        public assetId: number,
        public point: PointModel
    ){}
}