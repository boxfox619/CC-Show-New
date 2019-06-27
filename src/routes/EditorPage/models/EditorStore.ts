import SlideModel from './Slide';
import { AnyAsset } from '../../../models';

export default class EditorStore {
    constructor(
        public title: string = '',
        public slides: SlideModel[] = [new SlideModel(0, '슬라이드')],
        public isLoading: boolean = false,
        public isLoaded: boolean = false,
        public isSaving: boolean = false,
        public isSaved: boolean = false,
        public selectedSlideId: number = 0,
        public lastSlideId: number = 1,
        public copiedSlide?: SlideModel,
        public copiedAsset?: AnyAsset,
        public supportFonts: string[] = ['굴림', '굴림체', '궁서', '궁서체', '돋움', '돋움체', '바탕', '바탕체', '휴먼엽서체']
    ) { }
}