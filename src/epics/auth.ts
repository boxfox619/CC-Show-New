import { Action } from 'redux';
import { Observable, of, concat, from } from 'rxjs';
import { concatMap, map, catchError, throttleTime, timeout } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {
    LOGIN, LOGOUT, REGISTER, LOGIN_STARTED, LOGIN_FAILED, LOGIN_SUCCESSED, REGISTER_STARTED, REGISTER_SUCCESSED, REGISTER_FAILED
    , CHECK_LOGINED, CHECK_LOGINED_SUCCESSED, CHECK_LOGINED_FAILED,
    LOGOUT_STARTED, LOGOUT_SUCCESSED, LOGOUT_FAILED, CHECK_LOGINED_STARTED
} from '../reducers/auth';
import { login, register, checkLogined, logout } from '../api/AuthApi';

const loginEpic = (
    action: Observable<Action>
): Observable<any> => {
    const observable = action.pipe(
        ofType(LOGIN),
        throttleTime(3000),
        concatMap(($action: any) => concat(
            of({ type: LOGIN_STARTED }),
            from(login($action.email, $action.password)).pipe(
                timeout(15000),
                map((result: any) => ({ type: LOGIN_SUCCESSED, ...result })),
                catchError(error => of({ type: LOGIN_FAILED, error: error.message }))
            )
        ))
    );
    return observable;
};

const logoutEpic = (
    action: Observable<Action>
): Observable<any> => {
    const observable = action.pipe(
        ofType(LOGOUT),
        throttleTime(3000),
        concatMap(($action: any) => concat(
            of({ type: LOGOUT_STARTED }),
            from(logout()).pipe(
                timeout(15000),
                map((result: any) => ({ type: LOGOUT_SUCCESSED, ...result })),
                catchError(error => of({ type: LOGOUT_FAILED, error: error.message }))
            )
        ))
    );
    return observable;
};

const registerEpic = (
    action: Observable<Action>
): Observable<any> => {
    const observable = action.pipe(
        ofType(REGISTER),
        throttleTime(3000),
        concatMap(($action: any) => concat(
            of({ type: REGISTER_STARTED }),
            from(register($action.email, $action.nickname, $action.password)).pipe(
                timeout(15000),
                map((result: boolean) => ({ type: REGISTER_SUCCESSED })),
                catchError(error => of({ type: REGISTER_FAILED, error: error.message }))
            )
        ))
    );
    return observable;
};

const checkLoginedEpic = (
    action: Observable<Action>
): Observable<any> => {
    const observable = action.pipe(
        ofType(CHECK_LOGINED),
        throttleTime(1000),
        concatMap(($action: any) => concat(
            of({ type: CHECK_LOGINED_STARTED }),
            from(checkLogined()).pipe(
                timeout(15000),
                map((data) => ({ type: CHECK_LOGINED_SUCCESSED, ...data })),
                catchError(error => of({ type: CHECK_LOGINED_FAILED, error: error.message }))
            )
        ))
    );
    return observable;
};

/* 
const withdrawEpic = (
    action: Observable<Action>
): Observable<any> => {
    const observable = action.pipe(
        ofType(WITHDRAW),
        throttleTime(3000),
        concatMap(($action: any) => concat(
            of({ type: WITHDRAW_STARTED }),
            from(withdraw()).pipe(
                timeout(15000),
                flatMap((res: boolean) => res ? [{ type: WITHDRAW_SUCCESS }, { type: CHECK_LOGINED }] : [{ type: WITHDRAW_FAILED }]),
                catchError(error => of({ type: WITHDRAW_FAILED, error }))
            )
        ))
    );
    return observable;
}; */

export default [loginEpic, logoutEpic, registerEpic, checkLoginedEpic];
