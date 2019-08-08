import EditorStoreModel from "./EditorStore";
import AccountStoreModel from '../../../models/AccountStore';

export default interface StoreModel {
    auth: AccountStoreModel,
    editor: EditorStoreModel
}