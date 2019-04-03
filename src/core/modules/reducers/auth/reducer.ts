import update from 'immutability-helper';
import * as Action from './action';
import { AccountStoreModel } from 'src/core/models/store/AccountStoreModel';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [Action.LOGIN_STARTED]: (state: AccountStoreModel, action: any) => ({ auth: { isLoading: { $set: true } } }),
    [Action.LOGOUT_STARTED]: (state: AccountStoreModel, action: any) => ({ auth: { isLoading: { $set: true } } }),
    [Action.REGISTER_STARTED]: (state: AccountStoreModel, action: any) => ({ auth: { isLoading: { $set: true } } }),
    [Action.CHECK_LOGINED_STARTED]: (state: AccountStoreModel, action: any) => ({ auth: { isLoading: { $set: true } } }),
    [Action.LOGIN_SUCCESSED]: (state: AccountStoreModel, action: any) => ({
        auth: {
            isLoading: { $set: false },
            isLogined: { $set: true },
            userName: { $set: action.name },
            userEmail: { $set: action.email }
        }
    }),
    [Action.LOGIN_FAILED]: (state: AccountStoreModel, action: any) => ({
        auth: {
            isLoading: { $set: false },
            isLogined: { $set: false },
            error: { $set: action.error }
        }
    }),
    [Action.LOGOUT_SUCCESSED]: (state: AccountStoreModel, action: any) => ({
        auth: {
            isLoading: { $set: false },
            isLogined: { $set: false },
            userName: { $set: '' },
            userEmail: { $set: '' }
        }
    }),
    [Action.LOGOUT_FAILED]: (state: AccountStoreModel, action: any) => ({
        auth: {
            isLoading: { $set: false },
            error: { $set: action.error }
        }
    }),
    [Action.REGISTER_SUCCESSED]: (state: AccountStoreModel, action: any) => ({
        auth: {
            isLoading: { $set: false },
            registerMode: { $set: false }
        }
    }),
    [Action.REGISTER_FAILED]: (state: AccountStoreModel, action: any) => ({
        auth: {
            isLoading: { $set: false },
            error: { $set: action.error }
        }
    }),
};

const reducer = (state = new AccountStoreModel(), action: any) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? update(state, handler(state, action)) : state
}
export default reducer;