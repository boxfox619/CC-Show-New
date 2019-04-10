import { injectReducer } from '../../store/reducers';
import authReducer from './auth/reducer';
import authEpics from './auth/epic';
import { Store } from 'redux';

export default function initReducers(store: Store) {
    injectReducer(store, 'auth', authReducer, authEpics);
}