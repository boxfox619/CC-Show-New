import AssetModel from 'src/core/models/AssetModel';

export default class SlideModel {
    constructor(
        public id: number = 0,
        public assets: AssetModel[] = [],
        public lastAssetId: number = 0
    ){}
}