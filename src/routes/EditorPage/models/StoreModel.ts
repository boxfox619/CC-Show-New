import EditorStoreModel from "./EditorStore";
import AccountStoreModel from 'src/models/AccountStore';

export default interface StoreModel {
    auth: AccountStoreModel,
    editor: EditorStoreModel
}