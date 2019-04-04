import update from 'immutability-helper';
import * as ActionType from './action';
import { LoginSuccessOption } from './action';
import { Action } from 'src/core/store/actionCreator';
import AccountStoreModel from 'src/core/models/store/AccountStoreModel';

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [ActionType.LOGIN_STARTED]: (state: AccountStoreModel, action: Action<undefined>) => ({ auth: { isSigningIn: { $set: true } } }),
    [ActionType.LOGOUT_STARTED]: (state: AccountStoreModel, action: Action<undefined>) => ({ auth: { isSigningOut: { $set: true } } }),
    [ActionType.REGISTER_STARTED]: (state: AccountStoreModel, action: Action<undefined>) => ({ auth: { isSigningUp: { $set: true } } }),
    [ActionType.CHECK_LOGINED_STARTED]: (state: AccountStoreModel, action: Action<undefined>) => ({ auth: { isLoginChecking: { $set: true } } }),
    [ActionType.LOGIN_SUCCESSED]: (state: AccountStoreModel, action: Action<LoginSuccessOption>) => ({
        auth: {
            isSigningIn: { $set: false },
            isLogined: { $set: true },
            userName: { $set: action.payload.nickname },
            userEmail: { $set: action.payload.email }
        }
    }),
    [ActionType.LOGIN_FAILED]: (state: AccountStoreModel, action: Action<Error>) => ({
        auth: {
            isSigningIn: { $set: false },
            isLogined: { $set: false },
            error: { $set: action.payload }
        }
    }),
    [ActionType.LOGOUT_SUCCESSED]: (state: AccountStoreModel, action: Action<undefined>) => ({
        auth: {
            isSigningOut: { $set: false },
            isLogined: { $set: false },
            userName: { $set: '' },
            userEmail: { $set: '' }
        }
    }),
    [ActionType.LOGOUT_FAILED]: (state: AccountStoreModel, action: Action<Error>) => ({
        auth: {
            isSigningOut: { $set: false },
            error: { $set: action.payload }
        }
    }),
    [ActionType.REGISTER_SUCCESSED]: (state: AccountStoreModel, action: Action<undefined>) => ({
        auth: {
            isSigningUp: { $set: false },
            isRegistred: { $set: true }
        }
    }),
    [ActionType.REGISTER_FAILED]: (state: AccountStoreModel, action: Action<Error>) => ({
        auth: {
            isSigningUp: { $set: false },
            isRegistred: { $set: false},
            error: { $set: action.payload }
        }
    }),
    [ActionType.CHECK_LOGINED_SUCCESSED]: (state: AccountStoreModel, action: any) => ({
        auth: {
            isLoginChecking: { $set: false },
            isLoginChecked: { $set: true },
            isLogined: { $set: action.status },
            userName: { $set: action.name || '' },
            userEmail: { $set: action.email || '' }
        }
    }),
    [ActionType.CHECK_LOGINED_FAILED]: (state: AccountStoreModel, action: any) => ({
        auth: {
            isLoginChecking: { $set: false },
            isLoginChecked: { $set: false },
            error: { $set: action.error }
        }
    }),
};

const reducer = (state = new AccountStoreModel(), action: Action<any>) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? update(state, handler(state, action)) : state
}
export default reducer;