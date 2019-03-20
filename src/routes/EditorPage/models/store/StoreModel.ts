import EditorStoreModel from './EditorStoreModel';

export default class StoreModel {
    constructor(
        public editor = new EditorStoreModel(),
    ) {}
}