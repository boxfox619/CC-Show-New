import { Point, AssetType } from 'src/models';
export class CreateAssetPayload {
    constructor(
        public assetType: AssetType,
        public point: Point,
        public value?: string
    ) { }
}