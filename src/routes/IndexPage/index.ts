import { Store } from "redux";
import { injectReducer } from 'src/core/store/reducers';
import handleError from "src/core/util/ErrorHandler";

const REDUCER_KEY = 'index';

export default (store: Store) => (
    (): Promise<any> => {
        import('./modules').then((modules: any) => {
            const reducer = modules.default.reducer;
            const epics = modules.default.epics;
            injectReducer(store, REDUCER_KEY, reducer, epics)
        }).catch(e => handleError(e));
        return import("./containers/IndexContainer");
    }
)