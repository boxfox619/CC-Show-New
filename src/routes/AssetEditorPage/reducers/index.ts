import { handleActions } from '../../../core/store';
import { createAction } from 'redux-actions';
import { CustomAssetData } from '@/models/asset';
import { AssetEditorStore } from '../models';

export const UPDATE_DATA = 'ASSET-EDITOR.UPDATE_DATA';

export const updateData = createAction<CustomAssetData>(UPDATE_DATA);

export const ACTION_HANDLERS = {
    [UPDATE_DATA]: (state: AssetEditorStore, payload: CustomAssetData) => ({ data: { $set: payload } }),
}
const rootReducer = handleActions<AssetEditorStore>(new AssetEditorStore(), ACTION_HANDLERS);

export default rootReducer;