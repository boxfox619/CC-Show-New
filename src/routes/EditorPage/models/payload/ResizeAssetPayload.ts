import { Point } from '@/models';
export class ResizeAssetPayload {
    constructor(
        public id: number,
        public position: Point,
        public width: number,
        public height: number
    ) { }
}