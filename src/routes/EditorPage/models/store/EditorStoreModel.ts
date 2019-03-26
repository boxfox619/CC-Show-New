import SlideModel from './SlideModel';
import AssetModel from 'src/core/models/AssetModel';

export default class EditorStoreModel {
    constructor(
        public title: string = '',
        public slides: SlideModel[] = [new SlideModel()],
        public isLoading: boolean = false,
        public isLoaded: boolean = false,
        public isSaving: boolean = false,
        public isSaved: boolean = false,
        public selectedSlideId: number = 0,
        public copiedSlide?: SlideModel,
        public copiedAsset?: AssetModel
    ){}
}