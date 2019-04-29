import { Store } from "redux";
import { injectReducer } from 'src/core/store';

const REDUCER_KEY = 'editor';

export default (store: Store) => (
    async () => {
        const reducer = await import('./reducers');
        const epic = await import('./epics');
        injectReducer(store, REDUCER_KEY, reducer.default, epic.default)
        return await import("./containers/EditorContainer");
    }
)