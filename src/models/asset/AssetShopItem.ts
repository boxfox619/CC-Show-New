export class AssetShopItem {
    constructor(
        public id: number,
        public title: string,
        public subTitle: string,
        public thumbnail: string,
        public rate: number,
        public marked: boolean
    ) { }
}