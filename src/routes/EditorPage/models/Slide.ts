import { Asset } from 'src/models/asset';

export default class Slide {
    constructor(
        public id: number = 0,
        public name: string = '',
        public thumbnail?: string,
        public assets: Asset[] = [],
        public lastAssetId: number = 0,
        public selectedAssetId?: number
    ) { }
}