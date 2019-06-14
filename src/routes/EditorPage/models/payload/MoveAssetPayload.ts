import { Point } from 'src/models';
export class MoveAssetPayload {
    constructor(
        public assetId: number,
        public point: Point
    ) { }
}