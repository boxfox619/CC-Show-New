import EditorStoreModel from '../models/store/EditorStoreModel';
import AssetModel from 'src/core/models/AssetModel';
import PointModel from 'src/core/models/PointModel';
import { Action, createActionCreator } from 'src/core/store/actionCreator';

export const ADD_ASSET = 'ASSET.ADD_ASSET';
export const DELETE_ASSET = 'ASSET.DELETE_ASSET';

interface CreateAssetOptions {
    assetType: string,
    point: PointModel,
}

export const addAsset = createActionCreator<CreateAssetOptions>(ADD_ASSET);
export const deleteAsset = createActionCreator<number>(DELETE_ASSET);

export const ACTION_HANDLERS = {
    [ADD_ASSET]: (state: EditorStoreModel, action: Action<CreateAssetOptions>) => {
        const idx = state.slides.findIndex(s => s.id === state.selectedSlideId);
        const lastAssetId = state.slides[idx].lastAssetId;
        const newAsset = new AssetModel(lastAssetId, action.payload.assetType, action.payload.point);
        return { slides: { [idx]: { assets: { $push: newAsset }, lastAssetId: { $set: lastAssetId + 1 } } } };
    },
    [DELETE_ASSET]: (state: EditorStoreModel, action: Action<number>) => {
        const idx = state.slides.findIndex(s => s.id === state.selectedSlideId);
        const assetId = action.payload;
        const assetIdx = state.slides[idx].assets.findIndex(asset => asset.id === assetId);
        return { slides: { [idx]: { assets: { $splice: [[assetIdx, 1]] } } } };
    },
}