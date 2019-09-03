import { Store } from "redux";
import { injectReducer } from '../../core/store';

const REDUCER_KEY = 'assetEditor';

export default (store: Store) => (
    async () => {
        const reducer = await import('./reducers');
        //const epic = await import('./epics');
        injectReducer(store, REDUCER_KEY, reducer.default);
        return await import("./containers/AssetEditorContainer");
    }
)