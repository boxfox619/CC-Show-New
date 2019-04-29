import PointModel from 'src/models/PointModel';
export class CreateAssetPayload {
    constructor(
        public assetType: string,
        public point: PointModel,
    ){}
}