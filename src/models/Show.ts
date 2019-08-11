import { Slide } from './Slide';
export class Show {
    constructor(
        public title: string = '',
        public slides: Slide[] = [new Slide(0, '슬라이드')],
    ) { }

}