import { createAction } from 'redux-actions';
import EditorStore from '../models/EditorStore';
import { CreateAssetPayload, ResizeAssetPayload, UpdateAssetValuePayload, MoveAssetPayload, SortAssetPayload, ChangeStylePayload, UpdateAttrPayload } from '../models/payload';
import { createAsset } from '@/models/asset';
import { ActionHandlerMap } from '@/core/store/immutableReducer';

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

export const addAsset = createAction<CreateAssetPayload>(ADD_ASSET);
export const deleteAsset = createAction<number>(DELETE_ASSET);
export const moveAsset = createAction<MoveAssetPayload>(MOVE_ASSET);
export const copyAsset = createAction<number>(COPY_ASSET);
export const pasteAsset = createAction(PASTE_ASSET);
export const selectAsset = createAction<number | undefined>(SELECT_ASSET);
export const resizeAsset = createAction<ResizeAssetPayload>(RESIZE_ASSET);
export const updateAssetValue = createAction<UpdateAssetValuePayload>(UPDATE_ASSET_VALUE);
export const sortAsset = createAction<SortAssetPayload>(SORT_ASSET);
export const changeAssetStyle = createAction<ChangeStylePayload>(CHANGE_ASSET_STYLE);
export const updateAssetAttr = createAction<UpdateAttrPayload>(UPDATE_ASSET_ATTR);

const getCurrentSlideIdx = (state: EditorStore) => state.slides.findIndex(s => s.id === state.selectedSlideId);

export const ACTION_HANDLERS: ActionHandlerMap<EditorStore> = {
    [ADD_ASSET]: (state: EditorStore, payload: CreateAssetPayload) => {
        const idx = getCurrentSlideIdx(state);
        const lastAssetId = state.slides[idx].lastAssetId;
        const newAsset = createAsset(payload.assetType, lastAssetId, 100, 100, payload.point, payload.value);
        return {
            slides: {
                [idx]: {
                    assets: { $push: [newAsset] },
                    lastAssetId: { $set: lastAssetId + 1 }
                }
            }
        };
    },
    [DELETE_ASSET]: (state: EditorStore, payload: number) => {
        const idx = getCurrentSlideIdx(state);
        const assetId = payload;
        const assetIdx = state.slides[idx].assets.findIndex(asset => asset.id === assetId);
        return { slides: { [idx]: { assets: { $splice: [[assetIdx, 1]] } } } };
    },
    [MOVE_ASSET]: (state: EditorStore, payload: MoveAssetPayload) => {
        const idx = getCurrentSlideIdx(state);
        const assetId = payload.assetId;
        const assetIdx = state.slides[idx].assets.findIndex(asset => asset.id === assetId);
        return { slides: { [idx]: { assets: { [assetIdx]: { position: { $set: payload.point } } } } } };
    },
    [COPY_ASSET]: (state: EditorStore, payload: number) => {
        const idx = getCurrentSlideIdx(state);
        const assetId = payload;
        const asset = state.slides[idx].assets.find(a => a.id === assetId);
        return { copiedAsset: { $set: { ...asset } } };
    },
    [PASTE_ASSET]: (state: EditorStore) => {
        const idx = getCurrentSlideIdx(state);
        const copiedAsset = state.copiedAsset;
        const lastAssetId = state.slides[idx].lastAssetId;
        const newAsset = { ...copiedAsset, id: lastAssetId }
        return {
            slides: {
                [idx]: {
                    assets: { $push: [newAsset] },
                    lastAssetId: { $set: lastAssetId + 1 }
                }
            }
        };
    },
    [SELECT_ASSET]: (state: EditorStore, payload: number) => {
        const idx = getCurrentSlideIdx(state);
        return {
            slides: {
                [idx]: {
                    selectedAssetId: {
                        $set: payload
                    }
                }
            }
        }
    },
    [UPDATE_ASSET_VALUE]: (state: EditorStore, payload: UpdateAssetValuePayload) => {
        const idx = getCurrentSlideIdx(state);
        const assetIdx = state.slides[idx].assets.findIndex(a => a.id === payload.id);
        return {
            slides: {
                [idx]: {
                    assets: {
                        [assetIdx]: {
                            value: { $set: payload.value }
                        }
                    }
                }
            }
        }
    },
    [RESIZE_ASSET]: (state: EditorStore, payload: ResizeAssetPayload) => {
        const idx = getCurrentSlideIdx(state);
        const assetIdx = state.slides[idx].assets.findIndex(a => a.id === payload.id);
        return {
            slides: {
                [idx]: {
                    assets: {
                        [assetIdx]: {
                            position: { $set: payload.position },
                            width: { $set: payload.width },
                            height: { $set: payload.height }
                        }
                    }
                }
            }
        }
    },
    [SORT_ASSET]: (state: EditorStore, payload: SortAssetPayload) => {
        const slideIdx = getCurrentSlideIdx(state);
        const assetIdx = state.slides[slideIdx].assets.findIndex(a => a.id === payload.id);
        const assets = state.slides[slideIdx].assets.slice();
        const afterIndex = payload.getTargetIndex(assetIdx, assets.length);
        assets.splice(afterIndex, 0, assets.splice(assetIdx, 1)[0]);
        return { slides: { [slideIdx]: { assets: { $set: assets } } } };
    },
    [CHANGE_ASSET_STYLE]: (state: EditorStore, payload: ChangeStylePayload) => {
        const idx = getCurrentSlideIdx(state);
        const assetIdx = state.slides[idx].assets.findIndex(a => a.id === payload.id);
        return {
            slides: {
                [idx]: {
                    assets: {
                        [assetIdx]: {
                            style: { $set: payload.style }
                        }
                    }
                }
            }
        }
    },
    [UPDATE_ASSET_ATTR]: (state: EditorStore, payload: UpdateAttrPayload) => {
        const idx = getCurrentSlideIdx(state);
        const assetIdx = state.slides[idx].assets.findIndex(a => a.id === payload.id);
        return {
            slides: {
                [idx]: {
                    assets: {
                        [assetIdx]: {
                            [payload.attrName]: { $set: payload.value }
                        }
                    }
                }
            }
        }
    },
}