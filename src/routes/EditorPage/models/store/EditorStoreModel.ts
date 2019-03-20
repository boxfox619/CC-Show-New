import AssetModel from 'src/core/models/AssetModel';

export default class EditorStoreModel {
    constructor(
        public title: string = '',
        public assets: AssetModel[] = [],
        public isLoading: boolean = false,
        public isLoaded: boolean = false,
        public isSaving: boolean = false,
        public isSaved: boolean = false
    ){}
}