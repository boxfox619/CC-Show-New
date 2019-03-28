import EditorStoreModel from '../models/store/EditorStoreModel';
import AssetModel from 'src/core/models/AssetModel';
import PointModel from 'src/core/models/PointModel';
import { Action, createActionCreator } from 'src/core/store/actionCreator';

export const ADD_ASSET = 'ASSET.ADD_ASSET';
export const DELETE_ASSET = 'ASSET.DELETE_ASSET';
export const MOVE_ASSET = 'ASSET.MOVE_ASSET';
export const COPY_ASSET = 'ASSET.COPY_ASSET';
export const PASTE_ASSET = 'ASSET.PASTE_ASSET';

interface CreateAssetOptions {
    assetType: string,
    point: PointModel,
}

interface MoveAssetOptions {
    assetId: number,
    point: PointModel
}

export const addAsset = createActionCreator<CreateAssetOptions>(ADD_ASSET);
export const deleteAsset = createActionCreator<number>(DELETE_ASSET);
export const moveAsset = createActionCreator<MoveAssetOptions>(MOVE_ASSET);
export const copyAsset = createActionCreator<MoveAssetOptions>(COPY_ASSET);
export const pasteAsset = createActionCreator<number>(PASTE_ASSET);

const getCurrentSlideIdx = (state: EditorStoreModel) => state.slides.findIndex(s => s.id === state.selectedSlideId);

export const ACTION_HANDLERS = {
    [ADD_ASSET]: (state: EditorStoreModel, action: Action<CreateAssetOptions>) => {
        const idx = getCurrentSlideIdx(state);
        const lastAssetId = state.slides[idx].lastAssetId;
        const newAsset = new AssetModel(lastAssetId, action.payload.assetType, action.payload.point);
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
}