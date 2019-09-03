import EditorStoreModel from "./EditorStore";
import { DefaultStore } from "@/models";

export default interface StoreModel extends DefaultStore {
    editor: EditorStoreModel,
}