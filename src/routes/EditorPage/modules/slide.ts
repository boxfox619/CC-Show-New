import EditorStoreModel from '../models/store/EditorStoreModel';
import { Action, createActionCreator, createEmptyActionCreator } from 'src/core/store/actionCreator';
import SlideModel from './../models/store/SlideModel';

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
    [SELECT_SLIDE]: (state: EditorStoreModel, action: Action<number>) => ({ selectedSlideId: { $set: action.payload } }),
    [CREATE_SLIDE]: (state: EditorStoreModel, action: Action<number>) => {
        const { lastSlideId } = state;
        const newSlide = new SlideModel(lastSlideId, `슬라이드 ${state.slides.length}`);
        return {
            slides: { $push: [newSlide] },
            lastSlideId: { $set: lastSlideId + 1 }
        }
    },
    [DELETE_SLIDE]: (state: EditorStoreModel, action: Action<number>) => {
        const idx = state.slides.findIndex(s => s.id === action.payload);
        return { slides: { $splice: [idx, 1] } }
    },
    [COPY_SLIDE]: (state: EditorStoreModel, action: Action<number>) => {
        const slide = state.slides.find(s => s.id === action.payload);
        const { lastSlideId } = state;
        const newSlide = { ...slide, id: lastSlideId };
        return {
            slides: { $push: [newSlide] },
            lastSlideId: { $set: lastSlideId + 1 }
        }
    },
    [MOVE_SLIDE]: (state: EditorStoreModel, action: Action<MoveSlideOptions>) => {
        const { from, to } = action.payload;
        const newSlides = { ...state.slides };
        const slide = newSlides.splice(from, 1)[0];
        newSlides.splice(to, 0, slide);
        return { slides: { $set: newSlides } }
    },
}