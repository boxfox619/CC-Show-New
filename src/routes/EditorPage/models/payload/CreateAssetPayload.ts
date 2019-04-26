import PointModel from 'src/core/models/PointModel';
export class CreateAssetPayload {
    constructor(
        public assetType: string,
        public point: PointModel,
    ){}
}