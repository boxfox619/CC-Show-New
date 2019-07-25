import { Point } from '../../../../models';
export class MoveAssetPayload {
    constructor(
        public assetId: number,
        public point: Point
    ) { }
}