import AssetModel from 'src/models/AssetModel';

export default class Slide {
    constructor(
        public id: number = 0,
        public name: string = '',
        public thumbnail?: string,
        public assets: AssetModel[] = [],
        public lastAssetId: number = 0,
        public selectedAssetId?: number
    ){}
}