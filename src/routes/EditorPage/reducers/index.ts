import EditorStore from '../models/EditorStore';
import { handleActions } from '@/core/store';
import { ACTION_HANDLERS as ASSET_ACTION_HANDLER } from './asset';
import { ACTION_HANDLERS as SLIDE_ACTION_HANDLER } from './slide';

const ACTION_HANDLERS = {
    ...ASSET_ACTION_HANDLER,
    ...SLIDE_ACTION_HANDLER
};

const rootReducer = handleActions<EditorStore>(new EditorStore(), ACTION_HANDLERS);

export default rootReducer;