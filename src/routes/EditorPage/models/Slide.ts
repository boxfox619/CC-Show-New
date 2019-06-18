import { AnyAsset } from '../../../models';

export default class Slide {
    constructor(
        public id: number = 0,
        public name: string = '',
        public thumbnail?: string,
        public assets: AnyAsset[] = [],
        public lastAssetId: number = 0,
        public selectedAssetId?: number
    ) { }
}