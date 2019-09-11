import { AssetShopItem } from '@/models/asset';

export interface ShopUsecase {
  search(text: string): Promise<AssetShopItem[]>
}