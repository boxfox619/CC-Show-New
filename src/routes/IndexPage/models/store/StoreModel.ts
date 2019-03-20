import EditorStoreModel from './EditorStoreModel';
import AccountStoreModel from './AccountStoreModel';

export default class StoreModel {
    constructor(
        public editor = new EditorStoreModel(),
        public account = new AccountStoreModel()
    ) {}
}