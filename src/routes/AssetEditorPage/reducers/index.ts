import { handleActions } from '../../../core/store';
import { createAction } from 'redux-actions';
import { CustomAssetData } from '@/models/asset';
import { AssetEditorStore } from '../models';

export const UPDATE_DATA = 'ASSET-EDITOR.UPDATE_DATA';
export const CHANGE_THUMBNAIL = 'ASSET-EDITOR.CHANGE_THUMBNAIL';
export const SET_PUBLIC = 'ASSET-EDITOR.SET_PUBLIC';

export const updateData = createAction<CustomAssetData>(UPDATE_DATA);
export const setThumbnail = createAction<string>(CHANGE_THUMBNAIL);
export const setPublic = createAction<boolean>(SET_PUBLIC);

export const ACTION_HANDLERS = {
    [UPDATE_DATA]: (state: AssetEditorStore, payload: CustomAssetData) => ({ data: { $set: payload } }),
    [CHANGE_THUMBNAIL]: (state: AssetEditorStore, payload: string) => ({ thumbnail: { $set: payload } }),
    [SET_PUBLIC]: (state: AssetEditorStore, payload: boolean) => ({ public: { $set: payload } })
}
const rootReducer = handleActions<AssetEditorStore>(new AssetEditorStore(), ACTION_HANDLERS);

export default rootReducer;