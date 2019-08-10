import * as SlideActions from '../slide';
import { MoveSlidePayload } from '../../models/payload';
import EditorStore from '../../models/EditorStore';
import { handleActions } from '../../../../core/store';
import { Slide } from '@/models/Slide';
import { moveSlide } from '../slide';

describe('slide', () => {
    describe('actions', () => {
        const expectedActions = [
            { type: 'SLIDE.MOVE_SLIDE', payload: new MoveSlidePayload(1, 1) },
            { type: 'SLIDE.COPY_SLIDE', payload: 1 },
            { type: 'SLIDE.DELETE_SLIDE', payload: 1 },
            { type: 'SLIDE.CREATE_SLIDE' },
            { type: 'SLIDE.SHARE_SLIDE', payload: 1 },
            { type: 'SLIDE.SELECT_SLIDE', payload: 1 },
        ];
        const actions = [
            SlideActions.moveSlide(new MoveSlidePayload(1, 1)),
            SlideActions.copySlide(1),
            SlideActions.deleteSlide(1),
            SlideActions.createSlide(),
            SlideActions.shareSlide(1),
            SlideActions.selectSlide(1)
        ]
        expect(actions).toEqual(expectedActions);
    });

    describe('reducer', () => {
        let state = new EditorStore();
        const reducer = handleActions<EditorStore>(state, SlideActions.ACTION_HANDLERS);
        it('should return the initial state well', () => {
            expect(state).toHaveProperty('title', '');
            expect(state.slides.length).toBe(1);
        });
        it('should create slide well', () => {
            state = reducer(state, SlideActions.createSlide());
            expect(state.slides.length).toBe(2);
            expect(state.slides[1]).toEqual(new Slide(1, '슬라이드 1'));
        });
        it('should copy slide well', () => {
            state = reducer(state, SlideActions.copySlide(0));
            expect(state.slides.length).toBe(3);
            expect(state.slides[2]).toEqual(new Slide(2, '슬라이드'));
        });
        it('should move slide well', () => {
            state = reducer(state, SlideActions.moveSlide(new MoveSlidePayload(0, 2)));
            expect(state.slides.length).toBe(3);
            expect(state.slides[2]).toEqual(new Slide(0, '슬라이드'));
        });
        it('should delete slide well', () => {
            state = reducer(state, SlideActions.deleteSlide(2));
            expect(state.slides.length).toBe(2);
            expect(state.slides.find(s => s.id === 2)).toBeUndefined();
        });
        it('should select slide well', () => {
            state = reducer(state, SlideActions.selectSlide(0));
            expect(state.selectedSlideId).toBe(0);
        });
    });
});