import { combineReducers, Reducer } from 'redux';
import { Epic } from 'redux-observable';

export const makeRootReducer = (asyncReducers: any) => {
    return combineReducers({
        ...asyncReducers
    })
};

export const injectReducer = (store: any, key: string, reducer: Reducer, epics?: Epic[]) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
        return;
    }

    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
    if (!!epics) {
        epics.forEach((epic: any) => store.epic$.next(epic));
    }
};

export default makeRootReducer