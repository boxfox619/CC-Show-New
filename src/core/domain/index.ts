import { AuthUseCase } from './AuthUseCase';
import { SlideUseCase } from './SlideUseCase';
import { ShopUsecase } from './ShopUsecase';

export * from './AuthUseCase';
export * from './SlideUseCase';
export * from './ShopUsecase';

export interface UseCases {
    authApi: AuthUseCase,
    slideApi: SlideUseCase,
    shopApi: ShopUsecase
}