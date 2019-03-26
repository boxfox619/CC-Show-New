import EditorStoreModel from "./EditorStoreModel";
import AccountStoreModel from 'src/core/models/store/AccountStoreModel';

export default interface StoreModel {
    auth: AccountStoreModel,
    editor: EditorStoreModel
}