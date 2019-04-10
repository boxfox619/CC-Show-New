import { Action, applyMiddleware, compose, createStore, Store } from 'redux';
import { ActionsObservable, combineEpics, createEpicMiddleware, StateObservable, Epic } from "redux-observable";
import { BehaviorSubject, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import makeRootReducer from './reducers';
import initReducers from '../modules/reducers';

interface AsyncStore extends Store {
    epic$: any;
    asyncReducers: object
}

const createReduxStore = (initialState = {}) => {
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

    if ((module as any).hot) {
        (module as any).hot.accept('./reducers', () => {
            const reducers = require('./reducers').default
            store.replaceReducer(reducers(asyncReducers))
        })
    }

    const epic$ = new BehaviorSubject<any>(combineEpics());
    const rootEpic = (action$: ActionsObservable<Action>, state$: StateObservable<any>, dependencies: any): Observable<Action> => {
        return epic$.pipe(mergeMap((epic: Epic) => epic(action$, state$, dependencies)));
    }
    epicMiddleware.run(rootEpic);
    store.epic$ = epic$;
    initReducers(store);
    
    return store
};

export default createReduxStore