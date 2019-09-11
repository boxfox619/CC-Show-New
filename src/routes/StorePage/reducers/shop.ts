import { createAction } from 'redux-actions';
import { AssetShopStore } from '../models/AssetShopStore';
import { AssetShopItem } from '../../../models/asset/AssetShopItem';
import { ActionHandlerMap } from '@/core/store/immutableReducer';

// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH = 'SHOP.SEARCH';
export const SEARCH_START = 'SHOP.SEARCH_START';
export const SEARCH_SUCCESS = 'SHOP.SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SHOP.SEARCH_FAIL';

// ------------------------------------
// Actions
// ------------------------------------
export const search = createAction(SEARCH);
export const searchStart = createAction(SEARCH_START);
export const searchSuccess = createAction<AssetShopItem[]>(SEARCH_SUCCESS);
export const searchFail = createAction<Error>(SEARCH_FAIL);

// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS: ActionHandlerMap<AssetShopStore> = {
    [SEARCH_START]: (store: AssetShopStore) => {
        return { loading: { $set: true }, error: { $set: undefined } };
    },
    [SEARCH_SUCCESS]: (store: AssetShopStore, assets: AssetShopItem[]) => {
        return { loading: { $set: false }, assets: { $set: assets } }
    },
    [SEARCH_FAIL]: (store: AssetShopStore, error: Error) => {
        return { loading: { $set: false }, error: { $set: error } }
    },
};
