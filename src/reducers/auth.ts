import { createAction } from 'redux-actions';
import { handleActions } from '../core/store';
import { LoginSuccessPayload, LoginPayload, RegisterPayload, LoginResultPayload } from '../models/payload';
import { AccountStore } from '../models';

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'AUTH.LOGIN';
export const LOGOUT = 'AUTH.LOGOUT';
export const REGISTER = 'AUTH.REGISTER';
export const LOGIN_STARTED = 'AUTH.LOGIN_STARTED';
export const LOGOUT_STARTED = 'AUTH.LOGOUT_STARTED';
export const LOGIN_SUCCESSED = 'AUTH.LOGIN_SUCCESSED';
export const LOGIN_FAILED = 'AUTH.LOGIN_FAILED';
export const LOGOUT_SUCCESSED = 'AUTH.LOGOUT_SUCCESSED';
export const LOGOUT_FAILED = 'AUTH.LOGOUT_FAILED';
export const REGISTER_STARTED = 'AUTH.REGISTER_STARTED';
export const REGISTER_SUCCESSED = 'AUTH.REGISTER_SUCCESSED';
export const REGISTER_FAILED = 'AUTH.REGISTER_FAILED';
export const CHECK_LOGINED = 'AUTH.CHECK_LOGINED';
export const CHECK_LOGINED_STARTED = 'AUTH.CHECK_LOGINED_STARTED';
export const CHECK_LOGINED_SUCCESSED = 'AUTH.CHECK_LOGINED_SUCCESSED';
export const CHECK_LOGINED_FAILED = 'AUTH.CHECK_LOGINED_FAILED';

// ------------------------------------
// Actions
// ------------------------------------
export const login = createAction<LoginPayload>(LOGIN);
export const logout = createAction(LOGOUT);
export const register = createAction<RegisterPayload>(REGISTER);
export const checkLogined = createAction(CHECK_LOGINED);


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [LOGIN_STARTED]: (state: AccountStore) => ({ auth: { isSigningIn: { $set: true } } }),
    [LOGOUT_STARTED]: (state: AccountStore) => ({ auth: { isSigningOut: { $set: true } } }),
    [REGISTER_STARTED]: (state: AccountStore) => ({ auth: { isSigningUp: { $set: true } } }),
    [CHECK_LOGINED_STARTED]: (state: AccountStore) => ({ auth: { isLoginChecking: { $set: true } } }),
    [LOGIN_SUCCESSED]: (state: AccountStore, payload: LoginSuccessPayload) => ({
        auth: {
            isSigningIn: { $set: false },
            isLogined: { $set: true },
            userName: { $set: payload.nickname },
            userEmail: { $set: payload.email }
        }
    }),
    [LOGIN_FAILED]: (state: AccountStore, payload: Error) => ({
        auth: {
            isSigningIn: { $set: false },
            isLogined: { $set: false },
            error: { $set: payload }
        }
    }),
    [LOGOUT_SUCCESSED]: (state: AccountStore) => ({
        auth: {
            isSigningOut: { $set: false },
            isLogined: { $set: false },
            userName: { $set: '' },
            userEmail: { $set: '' }
        }
    }),
    [LOGOUT_FAILED]: (state: AccountStore, payload: Error) => ({
        auth: {
            isSigningOut: { $set: false },
            error: { $set: payload }
        }
    }),
    [REGISTER_SUCCESSED]: (state: AccountStore) => ({
        auth: {
            isSigningUp: { $set: false },
            isRegistred: { $set: true }
        }
    }),
    [REGISTER_FAILED]: (state: AccountStore, payload: Error) => ({
        auth: {
            isSigningUp: { $set: false },
            isRegistred: { $set: false },
            error: { $set: payload }
        }
    }),
    [CHECK_LOGINED_SUCCESSED]: (state: AccountStore, payload: LoginResultPayload) => ({
        auth: {
            isLoginChecking: { $set: false },
            isLoginChecked: { $set: true },
            isLogined: { $set: payload.status },
            userName: { $set: payload.name || '' },
            userEmail: { $set: payload.email || '' }
        }
    }),
    [CHECK_LOGINED_FAILED]: (state: AccountStore, payload: Error) => ({
        auth: {
            isLoginChecking: { $set: false },
            isLoginChecked: { $set: false },
            error: { $set: payload }
        }
    }),
};

const rootReducer = handleActions<AccountStore>(new AccountStore(), ACTION_HANDLERS);
export default rootReducer;