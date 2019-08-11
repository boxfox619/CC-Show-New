import { Action } from 'redux';

export interface PayloadAction<T> extends Action {
    payload: T
}