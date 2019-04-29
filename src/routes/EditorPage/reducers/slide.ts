import { createAction } from 'redux-actions';
import { MoveSlidePayload } from '../models/payload';
import EditorStore from '../models/EditorStore';
import Slide from '../models/Slide';

export const MOVE_SLIDE = 'SLIDE.MOVE_SLIDE';
export const COPY_SLIDE = 'SLIDE.COPY_SLIDE';
export const DELETE_SLIDE = 'SLIDE.DELETE_SLIDE';
export const CREATE_SLIDE = 'SLIDE.CREATE_SLIDE';
export const SHARE_SLIDE = 'SLIDE.SHARE_SLIDE';
export const SELECT_SLIDE = 'SLIDE.SELECT_SLIDE';

export const moveSlide = createAction<MoveSlidePayload>(MOVE_SLIDE);
export const copySlide = createAction<number>(COPY_SLIDE);
export const deleteSlide = createAction<number>(DELETE_SLIDE);
export const createSlide = createAction(CREATE_SLIDE);
export const shareSlide = createAction<number>(SHARE_SLIDE);
export const selectSlide = createAction<number>(SELECT_SLIDE);

export const ACTION_HANDLERS = {
    [SELECT_SLIDE]: (state: EditorStore, payload: number) => ({ selectedSlideId: { $set: payload } }),
    [CREATE_SLIDE]: (state: EditorStore) => {
        const { lastSlideId } = state;
        const newSlide = new Slide(lastSlideId, `슬라이드 ${state.slides.length}`);
        return {
            slides: { $push: [newSlide] },
            lastSlideId: { $set: lastSlideId + 1 }
        }
    },
    [DELETE_SLIDE]: (state: EditorStore, payload: number) => {
        const idx = state.slides.findIndex(s => s.id === payload);
        return { slides: { $splice: [idx, 1] } }
    },
    [COPY_SLIDE]: (state: EditorStore, payload: number) => {
        const slide = state.slides.find(s => s.id === payload);
        const { lastSlideId } = state;
        const newSlide = { ...slide, id: lastSlideId };
        return {
            slides: { $push: [newSlide] },
            lastSlideId: { $set: lastSlideId + 1 }
        }
    },
    [MOVE_SLIDE]: (state: EditorStore, payload: MoveSlidePayload) => {
        const { from, to } = payload;
        const newSlides = { ...state.slides };
        const slide = newSlides.splice(from, 1)[0];
        newSlides.splice(to, 0, slide);
        return { slides: { $set: newSlides } }
    },
}