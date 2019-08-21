import { Store } from 'redux';
import { injectReducer } from '../../core/store';

const REDUCER_KEY = 'index';

export default (store: Store) => (
    async () => {
        injectReducer(store, REDUCER_KEY);
        return await import('./containers/StoreContainer');
    }
)