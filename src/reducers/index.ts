import { injectReducer } from '../core/store';
import authReducer from './auth';
import authEpics from '../epics/auth';
import { Store } from 'redux';

export default function initReducers(store: Store) {
    injectReducer(store, 'auth', authReducer, authEpics);
}