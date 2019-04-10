import { createActionCreator } from 'src/core/store/actionCreator';
// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'AUTH.LOGIN';
export const LOGOUT = 'AUTH.LOGOUT';
export const REGISTER = 'AUTH.REGISTER'
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

export interface LoginOption {
    email: string,
    password: string
}

export interface RegisterOption extends LoginOption {
    nickname: string
}

export interface LoginSuccessOption {
    email: string,
    nickname: string
}


// ------------------------------------
// Actions
// ------------------------------------
export const login = createActionCreator<LoginOption>(LOGIN);
export const logout = createActionCreator(LOGOUT);
export const register = createActionCreator<RegisterOption>(REGISTER);
export const checkLogined = createActionCreator(CHECK_LOGINED);
