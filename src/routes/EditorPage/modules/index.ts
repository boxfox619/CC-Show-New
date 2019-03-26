import update from 'immutability-helper';
import EditorStoreModel from '../models/store/EditorStoreModel';
import epics from './epics';
import { ACTION_HANDLERS as ASSET_ACTION_HANDLER } from './asset';

const ACTION_HANDLERS = {
    ...ASSET_ACTION_HANDLER
};

export default {
    reducer: (state = new EditorStoreModel(), action: any) => {
        const handler = ACTION_HANDLERS[action.type];
        return handler ? update(state, handler(state, action)) : state
    },
    epics
}