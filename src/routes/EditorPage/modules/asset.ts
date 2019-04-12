import EditorStoreModel from '../models/store/EditorStoreModel';
import AssetModel from 'src/core/models/AssetModel';
import PointModel from 'src/core/models/PointModel';
import { Action, createActionCreator } from 'src/core/store/actionCreator';

export const ADD_ASSET = 'ASSET.ADD_ASSET';
export const DELETE_ASSET = 'ASSET.DELETE_ASSET';
export const MOVE_ASSET = 'ASSET.MOVE_ASSET';
export const COPY_ASSET = 'ASSET.COPY_ASSET';
export const PASTE_ASSET = 'ASSET.PASTE_ASSET';
export const SELECT_ASSET = 'ASSET.SELECT_ASSET';
export const RESIZE_ASSET = 'ASSET.RESIZE_ASSET';
export const UPDATE_ASSET_VALUE = 'ASSET.UPDATE_VALUE';

interface CreateAssetOptions {
    assetType: string,
    point: PointModel,
}

interface MoveAssetOptions {
    assetId: number,
    point: PointModel
}

interface ResizeAssetOptions {
    id: number,
    position: PointModel,
    width: number,
    height: number
}

interface UpdateAssetValueOptions {
    id: number,
    value: any
}

export const addAsset = createActionCreator<CreateAssetOptions>(ADD_ASSET);
export const deleteAsset = createActionCreator<number>(DELETE_ASSET);
export const moveAsset = createActionCreator<MoveAssetOptions>(MOVE_ASSET);
export const copyAsset = createActionCreator<number>(COPY_ASSET);
export const pasteAsset = createActionCreator<number>(PASTE_ASSET);
export const selectAsset = createActionCreator<number>(SELECT_ASSET);
export const resizeAsset = createActionCreator<ResizeAssetOptions>(RESIZE_ASSET);
export const updateAssetValue = createActionCreator<UpdateAssetValueOptions>(UPDATE_ASSET_VALUE);

const getCurrentSlideIdx = (state: EditorStoreModel) => state.slides.findIndex(s => s.id === state.selectedSlideId);

export const ACTION_HANDLERS = {
    [ADD_ASSET]: (state: EditorStoreModel, action: Action<CreateAssetOptions>) => {
        const idx = getCurrentSlideIdx(state);
        const lastAssetId = state.slides[idx].lastAssetId;
        const newAsset = new AssetModel(lastAssetId, action.payload.assetType, 100, 100, action.payload.point);
        return {
            slides: {
                [idx]: {
                    assets: { $push: [newAsset] },
                    lastAssetId: { $set: lastAssetId + 1 }
                }
            }
        };
    },
    [DELETE_ASSET]: (state: EditorStoreModel, action: Action<number>) => {
        const idx = getCurrentSlideIdx(state);
        const assetId = action.payload;
        const assetIdx = state.slides[idx].assets.findIndex(asset => asset.id === assetId);
        return { slides: { [idx]: { assets: { $splice: [[assetIdx, 1]] } } } };
    },
    [MOVE_ASSET]: (state: EditorStoreModel, action: Action<MoveAssetOptions>) => {
        const idx = getCurrentSlideIdx(state);
        const assetId = action.payload.assetId;
        const assetIdx = state.slides[idx].assets.findIndex(asset => asset.id === assetId);
        return { slides: { [idx]: { assets: { [assetIdx]: {position: action.payload.point} } } } };
    },
    [COPY_ASSET]: (state: EditorStoreModel, action: Action<number>) => {
        const idx = getCurrentSlideIdx(state);
        const assetId = action.payload;
        const asset = state.slides[idx].assets.find(a => a.id === assetId);
        return { copiedAsset: { $set: { ...asset } } };
    },
    [PASTE_ASSET]: (state: EditorStoreModel, action: Action<number>) => {
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
    [SELECT_ASSET]: (state: EditorStoreModel, action: Action<number>) => {
        const idx = getCurrentSlideIdx(state);
        return {
            slides: {
                [idx]: {
                    selectedAssetId: {
                        $set: action.payload
                    }
                }
            }
        }
    },
    [UPDATE_ASSET_VALUE]: (state: EditorStoreModel, action: Action<UpdateAssetValueOptions>) => {
        const idx = getCurrentSlideIdx(state);
        const assetIdx = state.slides[idx].assets.findIndex(a => a.id === action.payload.id);
        return {
            slides: {
                [idx]: {
                    assets : {
                        [assetIdx] : {
                            value: {$set: action.payload.value}
                        }
                    }
                }
            }
        }
    },
    [RESIZE_ASSET]: (state: EditorStoreModel, action: Action<ResizeAssetOptions>) => {
        const idx = getCurrentSlideIdx(state);
        const assetIdx = state.slides[idx].assets.findIndex(a => a.id === action.payload.id);
        return {
            slides: {
                [idx]: {
                    assets : {
                        [assetIdx] : {
                            position: {$set: action.payload.position},
                            width: {$set: action.payload.width},
                            height: {$set: action.payload.height}
                        }
                    }
                }
            }
        }
    }
}