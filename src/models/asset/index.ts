import { AssetType, Point } from '..';
import TextAsset from './TextAsset';
import ImageAsset from './ImageAsset';
import VideoAsset from './VideoAsset';
import ShapeAsset from './ShapeAsset';


export { Asset, AnyAsset } from './Asset';
export { default as ImageAsset } from './ImageAsset';
export { default as VideoAsset } from './VideoAsset';
export { default as TextAsset } from './TextAsset';
export { default as ShapeAsset } from './ShapeAsset';


export const createAsset = (type: AssetType, id: number, width: number, height: number, position: Point, value: any, attribute: any = {}) => {
    switch (type) {
        case AssetType.Image: return new ImageAsset(id, width, height, position, value);
        case AssetType.Video: return new VideoAsset(id, width, height, position, value, { preview: false, ...attribute });
        case AssetType.Shape: return new ShapeAsset(id, width, height, position, value);
        default: return new TextAsset(id, width, height, position, value);
    }
}