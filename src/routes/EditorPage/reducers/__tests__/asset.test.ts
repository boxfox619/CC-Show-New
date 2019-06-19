import * as AssetActions from '../asset';
import AssetType from '../../../../models/AssetType';
import { CreateAssetPayload, MoveAssetPayload, UpdateAssetValuePayload, SortAssetPayload, ChangeStylePayload } from '../../models/payload';
import { ResizeAssetPayload } from '../../models/payload/ResizeAssetPayload';
import { UpdateAttrPayload } from '../../models/payload/UpdateAttrPayload';
import EditorStore from '../../models/EditorStore';
import { handleActions } from '../../../../core/store';
import { TextAsset } from '../../../../models/asset';

export const ADD_ASSET = 'ASSET.ADD_ASSET';
export const DELETE_ASSET = 'ASSET.DELETE_ASSET';
export const MOVE_ASSET = 'ASSET.MOVE_ASSET';
export const COPY_ASSET = 'ASSET.COPY_ASSET';
export const PASTE_ASSET = 'ASSET.PASTE_ASSET';
export const SELECT_ASSET = 'ASSET.SELECT_ASSET';
export const RESIZE_ASSET = 'ASSET.RESIZE_ASSET';
export const UPDATE_ASSET_VALUE = 'ASSET.UPDATE_VALUE';
export const SORT_ASSET = 'ASSET.SORT_ASSET';
export const CHANGE_ASSET_STYLE = 'ASSET.CHANGE_ASSET_STYLE';
export const UPDATE_ASSET_ATTR = 'ASSET.UPDATE_ASSET_ATTR';

describe('asset', () => {
    describe('actions', () => {
        const expectedActions = [
            { type: 'ASSET.ADD_ASSET', payload: new CreateAssetPayload(AssetType.Text, { x: 1, y: 1 }) },
            { type: 'ASSET.DELETE_ASSET', payload: 1 },
            { type: 'ASSET.MOVE_ASSET', payload: new MoveAssetPayload(1, { x: 2, y: 2 }) },
            { type: 'ASSET.COPY_ASSET', payload: 1 },
            { type: 'ASSET.PASTE_ASSET' },
            { type: 'ASSET.SELECT_ASSET', payload: 1 },
            { type: 'ASSET.RESIZE_ASSET', payload: new ResizeAssetPayload(1, { x: 1, y: 1 }, 30, 30) },
            { type: 'ASSET.UPDATE_VALUE', payload: new UpdateAssetValuePayload(1, 30) },
            { type: 'ASSET.SORT_ASSET', payload: new SortAssetPayload(1, 30, true) },
            { type: 'ASSET.CHANGE_ASSET_STYLE', payload: new ChangeStylePayload(1, { backgroundColor: 'red' }) },
            { type: 'ASSET.UPDATE_ASSET_ATTR', payload: new UpdateAttrPayload(1, 'width', 30) },
        ];
        const actions = [
            AssetActions.addAsset(new CreateAssetPayload(AssetType.Text, { x: 1, y: 1 })),
            AssetActions.deleteAsset(1),
            AssetActions.moveAsset(new MoveAssetPayload(1, { x: 2, y: 2 })),
            AssetActions.copyAsset(1),
            AssetActions.pasteAsset(),
            AssetActions.selectAsset(1),
            AssetActions.resizeAsset(new ResizeAssetPayload(1, { x: 1, y: 1 }, 30, 30)),
            AssetActions.updateAssetValue(new UpdateAssetValuePayload(1, 30)),
            AssetActions.sortAsset(new SortAssetPayload(1, 30, true)),
            AssetActions.changeAssetStyle(new ChangeStylePayload(1, { backgroundColor: 'red' })),
            AssetActions.updateAssetAttr(new UpdateAttrPayload(1, 'width', 30))
        ];
        expect(actions).toEqual(expectedActions);
    });

    describe('reducer', () => {
        let state = new EditorStore();
        const reducer = handleActions<EditorStore>(state, AssetActions.ACTION_HANDLERS);
        it('should return the initial state well', () => {
            expect(state).toHaveProperty('title', '');
            expect(state.slides.length).toBe(1);
        });
        it('should create asset well', () => {
            state = reducer(state, AssetActions.addAsset(new CreateAssetPayload(AssetType.Text, { x: 1, y: 1 }, 'value-text')));
            expect(state.slides.length).toBe(1);
            const assets = state.slides[0].assets;
            expect(assets.length).toBe(1);
            expect(assets[0]).toEqual(new TextAsset(0, 100, 100, { x: 1, y: 1 }, 'value-text'));
        });
        it('should move asset well', () => {
            state = reducer(state, AssetActions.moveAsset(new MoveAssetPayload(0, { x: 10, y: 10 })));
            const assets = state.slides[0].assets;
            expect(assets.length).toBe(1);
            expect(assets[0]).toEqual(new TextAsset(0, 100, 100, { x: 10, y: 10 }, 'value-text'));
        });
        it('should copy asset well', () => {
            state = reducer(state, AssetActions.copyAsset(0));
            expect(state.copiedAsset).toEqual(new TextAsset(0, 100, 100, { x: 10, y: 10 }, 'value-text'));
        });
        it('should paste asset well', () => {
            state = reducer(state, AssetActions.pasteAsset());
            const assets = state.slides[0].assets;
            expect(assets.length).toBe(2);
            expect(assets[1]).toEqual(new TextAsset(1, 100, 100, { x: 10, y: 10 }, 'value-text'));
        });
        it('should sort asset well', () => {
            state = reducer(state, AssetActions.sortAsset(new SortAssetPayload(0, 1, true)));
            let assets = state.slides[0].assets;
            expect(assets.length).toBe(2);
            expect(assets[0].id).toBe(1);
            state = reducer(state, AssetActions.sortAsset(new SortAssetPayload(0, -1)));
            assets = state.slides[0].assets;
            expect(assets.length).toBe(2);
            expect(assets[0].id).toBe(0);
        });
        it('should delete asset well', () => {
            state = reducer(state, AssetActions.deleteAsset(1));
            const assets = state.slides[0].assets;
            expect(assets.length).toBe(1);
        });
        it('should select asset well', () => {
            state = reducer(state, AssetActions.selectAsset(0));
            expect(state.slides[0].selectedAssetId).toBe(0);
        });
        it('should resize asset well', () => {
            state = reducer(state, AssetActions.resizeAsset(new ResizeAssetPayload(0, { x: 1, y: 1 }, 30, 30)));
            const assets = state.slides[0].assets;
            expect(assets.length).toBe(1);
            expect(assets[0]).toEqual(new TextAsset(0, 30, 30, { x: 1, y: 1 }, 'value-text'));
        });
        it('should update asset value well', () => {
            state = reducer(state, AssetActions.updateAssetValue(new UpdateAssetValuePayload(0, 'updated-text')));
            const assets = state.slides[0].assets;
            expect(assets.length).toBe(1);
            expect(assets[0]).toEqual(new TextAsset(0, 30, 30, { x: 1, y: 1 }, 'updated-text'));
        });
        it('should change asset style well', () => {
            state = reducer(state, AssetActions.changeAssetStyle(new ChangeStylePayload(0, { backgroundColor: 'red' })));
            const assets = state.slides[0].assets;
            expect(assets.length).toBe(1);
            expect(assets[0].style.backgroundColor).toBe('red');
        });
        it('should change asset attribute well', () => {
            state = reducer(state, AssetActions.updateAssetAttr(new UpdateAttrPayload(0, 'testAttr', 'attr-value')));
            const assets = state.slides[0].assets;
            expect(assets.length).toBe(1);
            expect(assets[0]).toHaveProperty('testAttr', 'attr-value');
        });
    })
});