import { AssetShopItem } from '@/models';

export class AssetShopStore {
    constructor(
        public assets: AssetShopItem[] = [],
        public loading: boolean = false,
        public error?: Error
    ) { }
}