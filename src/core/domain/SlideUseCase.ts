import { Show } from "../../models";

export interface SlideUseCase {
    save: (showData: Show) => Promise<boolean>;
}