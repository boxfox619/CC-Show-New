import { AssetEditorStore } from './AssetEditorStore';
import { DefaultStore } from '@/models';

export interface StoreModel extends DefaultStore {
  assetEditor: AssetEditorStore,
}