import EditorStoreModel from '../models/store/EditorStoreModel';
import { Action, createActionCreator, createEmptyActionCreator } from 'src/core/store/actionCreator';

export const MOVE_SLIDE = 'SLIDE.MOVE_SLIDE';
export const COPY_SLIDE = 'SLIDE.COPY_SLIDE';
export const DELETE_SLIDE = 'SLIDE.DELETE_SLIDE';
export const CREATE_SLIDE = 'SLIDE.CREATE_SLIDE';
export const SHARE_SLIDE = 'SLIDE.SHARE_SLIDE';
export const SELECT_SLIDE = 'SLIDE.SELECT_SLIDE';

interface MoveSlideOptions{
    from: number,
    to: number
}

export const moveSlide = createActionCreator<MoveSlideOptions>(MOVE_SLIDE);
export const copySlide = createActionCreator<number>(COPY_SLIDE);
export const deleteSlide = createActionCreator<number>(DELETE_SLIDE);
export const createSlide = createEmptyActionCreator(CREATE_SLIDE);
export const shareSlide = createActionCreator<number>(SHARE_SLIDE);
export const selectSlide = createActionCreator<number>(SELECT_SLIDE);

export const ACTION_HANDLERS = {
}