import { Action, applyMiddleware, compose, createStore, Store } from 'redux';
import { ActionsObservable, combineEpics, createEpicMiddleware, StateObservable, Epic } from "redux-observable";
import { BehaviorSubject, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import makeRootReducer from './reducer';

interface AsyncStore extends Store {
    epic$: any;
    asyncReducers: object
}

export const createReduxStore = (initialState = {}) => {
    const epicMiddleware = createEpicMiddleware();
    const middleware: any[] = [epicMiddleware];

    const enhancers: any[] = [];
    const composeEnhancers = compose;

    const asyncReducers: any = {};
    const store = createStore(
        makeRootReducer(asyncReducers),
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware),
            ...enhancers
        )
    ) as AsyncStore;
    store.asyncReducers = asyncReducers;

    const epic$ = new BehaviorSubject<any>(combineEpics());
    const rootEpic = (action$: ActionsObservable<Action>, state$: StateObservable<any>, dependencies: any): Observable<Action> => {
        return epic$.pipe(mergeMap((epic: Epic) => epic(action$, state$, dependencies)));
    }
    epicMiddleware.run(rootEpic);
    store.epic$ = epic$;
    
    return store
};
