import { createAction } from 'redux-actions';
import { AssetShopStore } from '../models/AssetShopStore';
import { AssetShopItem } from '../../../models/asset/AssetShopItem';
import { ActionHandlerMap } from '@/core/store/immutableReducer';

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD = 'SHOP.LOAD';
export const LOAD_START = 'SHOP.LOAD_START';
export const LOAD_SUCCESS = 'SHOP.LOAD_SUCCESS';
export const LOAD_FAIL = 'SHOP.LOAD_FAIL';

// ------------------------------------
// Actions
// ------------------------------------
export const load = createAction(LOAD);
export const loadStart = createAction(LOAD_START);
export const loadSuccess = createAction<AssetShopItem[]>(LOAD_SUCCESS);
export const loadFail = createAction<Error>(LOAD_FAIL);

// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS: ActionHandlerMap<AssetShopStore> = {
    [LOAD_START]: (store: AssetShopStore) => {
        return { loading: { $set: true }, error: { $set: undefined } };
    },
    [LOAD_SUCCESS]: (store: AssetShopStore, assets: AssetShopItem[]) => {
        return {loading: {$set: false}, assets: {$set: assets}}
    },
    [LOAD_FAIL]: (store: AssetShopStore, error: Error) => {
        return {loading: {$set: false}, error: {$set: error}}
    },
};
