import {PointModel, AssetType} from 'src/models';
export class CreateAssetPayload {
    constructor(
        public assetType: AssetType,
        public point: PointModel,
        public value?: string
    ){}
}