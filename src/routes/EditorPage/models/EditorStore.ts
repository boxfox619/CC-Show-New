import SlideModel from './Slide';
import AssetModel from 'src/models/AssetModel';

export default class EditorStore {
    constructor(
        public title: string = '',
        public slides: SlideModel[] = [new SlideModel()],
        public isLoading: boolean = false,
        public isLoaded: boolean = false,
        public isSaving: boolean = false,
        public isSaved: boolean = false,
        public selectedSlideId: number = 0,
        public lastSlideId: number = 0,
        public copiedSlide?: SlideModel,
        public copiedAsset?: AssetModel
    ){}
}