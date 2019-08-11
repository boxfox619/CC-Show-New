import { SlideUseCase } from '@/core/domain';
import { Show } from '@/models';

export class SlideApi implements SlideUseCase {
  save = async (showData: Show) => {
    return true;
  };
}