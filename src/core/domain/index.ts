import { AuthUseCase } from './AuthUseCase';
import { SlideUseCase } from './SlideUseCase';

export * from './AuthUseCase';
export * from './SlideUseCase';

export interface UseCases {
    authApi: AuthUseCase,
    slideApi: SlideUseCase
}