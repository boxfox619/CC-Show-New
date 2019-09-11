import { UseCases } from '../core/domain';
import { SlideApi } from './SlideApi';
import { AuthApi } from './AuthApi';
import { ShopApi } from './ShopApi';

export const apis: UseCases = {
  authApi: new AuthApi(),
  slideApi: new SlideApi(),
  shopApi: new ShopApi()
}