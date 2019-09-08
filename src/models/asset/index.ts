import { AssetType, Point } from '..';
import TextAsset from './TextAsset';
import ImageAsset from './ImageAsset';
import { VideoAsset } from './VideoAsset';
import ShapeAsset from './ShapeAsset';
import { AssetAttribute } from './Asset';

export * from './AssetShopItem';
export * from './Asset';
export { default as ImageAsset } from './ImageAsset';
export * from './VideoAsset';
export { default as TextAsset } from './TextAsset';
export { default as ShapeAsset } from './ShapeAsset';
export * from './CustomAsset';


export const createAsset = (type: AssetType, id: number, width: number, height: number, position: Point, value: any, attribute: AssetAttribute = { angle: 0 }) => {
    switch (type) {
        case AssetType.Image: return new ImageAsset(id, width, height, position, value, attribute);
        case AssetType.Video: return new VideoAsset(id, width, height, position, value, attribute);
        case AssetType.Shape: return new ShapeAsset(id, width, height, position, value, attribute);
        default: return new TextAsset(id, width, height, position, value, attribute);
    }
}