import { UseCases } from '../core/domain';
import { SlideApi } from './SlideApi';
import { AuthApi } from './AuthApi';

export const apis: UseCases = {
  authApi: new AuthApi(),
  slideApi: new SlideApi()
}