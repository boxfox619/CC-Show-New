import { Action, AnyAction } from 'redux';
import { Observable, of, concat, from } from 'rxjs';
import { concatMap, map, catchError, throttleTime, timeout } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';
import {
    LOGIN, LOGOUT, REGISTER, LOGIN_STARTED, LOGIN_FAILED, LOGIN_SUCCESSED, REGISTER_STARTED, REGISTER_SUCCESSED, REGISTER_FAILED
    , CHECK_LOGINED, CHECK_LOGINED_SUCCESSED, CHECK_LOGINED_FAILED,
    LOGOUT_STARTED, LOGOUT_SUCCESSED, LOGOUT_FAILED, CHECK_LOGINED_STARTED
} from '../reducers/auth';
import { PayloadAction, RegisterPayload } from '../models/payload';
import { LoginPayload } from '../models/payload/LoginPayload';
import StoreModel from '../routes/EditorPage/models/StoreModel';
import { UseCases } from '../core/domain/index';

type LoginAction = PayloadAction<LoginPayload>;
type RegisterAction = PayloadAction<RegisterPayload>;

const loginEpic: Epic<LoginAction, LoginAction, StoreModel, UseCases> = (
    action: Observable<LoginAction>,
    state,
    { authApi }
): Observable<PayloadAction<any>> => action.pipe(
    ofType(LOGIN),
    throttleTime(3000),
    concatMap(($action: LoginAction) => concat(
        of({ type: LOGIN_STARTED }),
        from(authApi.login($action.payload)).pipe(
            timeout(15000),
            map((result: any) => ({ type: LOGIN_SUCCESSED, ...result })),
            catchError(error => of({ type: LOGIN_FAILED, error: error.message }))
        )
    ))
);

const logoutEpic: Epic<Action, Action, StoreModel, UseCases> = (
    action: Observable<Action>,
    state,
    { authApi }
): Observable<any> => {
    const observable = action.pipe(
        ofType(LOGOUT),
        throttleTime(3000),
        concatMap(() => concat(
            of({ type: LOGOUT_STARTED }),
            from(authApi.logout()).pipe(
                timeout(15000),
                map((result: any) => ({ type: LOGOUT_SUCCESSED, ...result })),
                catchError(error => of({ type: LOGOUT_FAILED, error: error.message }))
            )
        ))
    );
    return observable;
};

const registerEpic: Epic<RegisterAction, RegisterAction, StoreModel, UseCases> = (
    action: Observable<RegisterAction>,
    state,
    { authApi }
): Observable<any> => action.pipe(
    ofType(REGISTER),
    throttleTime(3000),
    concatMap(($action: RegisterAction) => concat(
        of({ type: REGISTER_STARTED }),
        from(authApi.register($action.payload)).pipe(
            timeout(15000),
            map((result: boolean) => ({ type: REGISTER_SUCCESSED })),
            catchError(error => of({ type: REGISTER_FAILED, error: error.message }))
        )
    ))
);

const checkLoginedEpic: Epic<Action, Action, StoreModel, UseCases> = (
    action: Observable<Action>,
    state,
    { authApi }
): Observable<any> => action.pipe(
    ofType(CHECK_LOGINED),
    throttleTime(1000),
    concatMap(($action: any) => concat(
        of({ type: CHECK_LOGINED_STARTED }),
        from(authApi.checkLogined()).pipe(
            timeout(15000),
            map((res: boolean) => res ? ({ type: CHECK_LOGINED_SUCCESSED }) : ({ type: CHECK_LOGINED_FAILED })),
            catchError(error => of({ type: CHECK_LOGINED_FAILED, error: error.message }))
        )
    ))
);

export default [loginEpic, logoutEpic, registerEpic, checkLoginedEpic];
