import EditorStoreModel from './EditorStore';
import { AccountStore } from '@/models';

export default interface StoreModel {
    auth: AccountStore,
    editor: EditorStoreModel
}