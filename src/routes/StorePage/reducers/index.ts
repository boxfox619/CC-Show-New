import { AssetShopStore } from '../models';
import { handleActions } from '@/core/store';
import { ACTION_HANDLERS as SHOP_ACTION_HANDLER } from './shop';

const ACTION_HANDLERS = {
    ...SHOP_ACTION_HANDLER,
};

const rootReducer = handleActions<AssetShopStore>(new AssetShopStore(), ACTION_HANDLERS);

export default rootReducer;