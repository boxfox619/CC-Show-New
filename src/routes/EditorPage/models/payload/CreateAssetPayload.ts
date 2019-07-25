import { Point, AssetType } from '../../../../models';
export class CreateAssetPayload {
    constructor(
        public assetType: AssetType,
        public point: Point,
        public value?: string
    ) { }
}