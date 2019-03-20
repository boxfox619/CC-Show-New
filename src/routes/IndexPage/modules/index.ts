import update from 'immutability-helper';
import StoreModel from '../models/store/StoreModel';
import epics from './epics';
import { ACTION_HANDLERS as LOCATION_ACTION_HANDLER } from './location';

const ACTION_HANDLERS = {
    ...LOCATION_ACTION_HANDLER
};

export default {
    reducer: (state = new StoreModel(), action: any) => {
        const handler = ACTION_HANDLERS[action.type];
        return handler ? update(state, handler(state, action)) : state
    },
    epics
}