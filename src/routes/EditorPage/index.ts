import { Store } from "redux";
import { injectReducer } from 'src/core/store/reducers';

const REDUCER_KEY = 'index';

export default (store: Store) => (
    async () => {
        const modules = await import('./modules');
        const reducer = modules.default.reducer;
        const epics = modules.default.epics;
        injectReducer(store, REDUCER_KEY, reducer, epics)
        return await import("./containers/EditorContainer");
    }
)