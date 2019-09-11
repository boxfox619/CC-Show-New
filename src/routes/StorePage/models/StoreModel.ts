import { DefaultStore } from '@/models';
import { AssetShopStore } from '../AssetShopStore';

export interface StoreModel extends DefaultStore{
  shop: AssetShopStore
}