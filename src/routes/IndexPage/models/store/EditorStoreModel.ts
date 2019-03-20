import { AssetModel } from 'src/core/model/AssetModel';

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