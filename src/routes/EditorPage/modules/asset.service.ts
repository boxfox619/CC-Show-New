import GuidelineModel from '@/models/asset/Guideline';
import { AnyAsset } from '../../../models/asset/Asset';

export const DATASET_TYPE_ASSET = 'asset';
export const DATASET_TYPE_RESIZER = 'asset-resizer';
export const DATASET_TYPE_SELECTOR_DOT = 'asset-selector-dot';
export const DATASET_TYPE_SELECTOR_LINE = 'asset-selector-line';
export const RESIZE_TYPE_TOP = 'resize-top';
export const RESIZE_TYPE_BOTTOM = 'resize-bottom';
export const RESIZE_TYPE_LEFT = 'resize-left';
export const RESIZE_TYPE_RIGHT = 'resize-right';
export const RESIZE_TYPE_LEFT_TOP = 'resize-left-top';
export const RESIZE_TYPE_RIGHT_TOP = 'resize-right-top';
export const RESIZE_TYPE_LEFT_BOTTOM = 'resize-left-bottom';
export const RESIZE_TYPE_RIGHT_BOTTOM = 'resize-right-bottom';

export const isResizer = (target: HTMLElement) => target.dataset.type === DATASET_TYPE_RESIZER;
export const isSelector = (target: HTMLElement) => target.dataset.type === DATASET_TYPE_SELECTOR_DOT || target.dataset.type === DATASET_TYPE_SELECTOR_LINE;
export const findAsset = (target: HTMLElement) => findNodeByType(DATASET_TYPE_ASSET, target);
export const getResizeTarget = (target: HTMLElement) => target.dataset.resize || '';
export const calMagneticPositionX = (position: number, size: number, assets: AnyAsset[]) => calMagneticPosition('x', position, size, assets);
export const calMagneticPositionY = (position: number, size: number, assets: AnyAsset[]) => calMagneticPosition('y', position, size, assets);
export const calMagneticSizeX = (position: number, size: number, assets: AnyAsset[]) => calMagneticSize('x', position, size, assets);
export const calMagneticSizeY = (position: number, size: number, assets: AnyAsset[]) => calMagneticSize('y', position, size, assets);

export function move(
    xInElement: number,
    yInElement: number,
    pageX: number,
    pageY: number,
    selectedAsset: AnyAsset,
    otherAssets: AnyAsset[],
    callback: (id: number, x: number, y: number, width: number, height: number) => void
) {
    let afterX = selectedAsset.position.x + (pageX - xInElement);
    let afterY = selectedAsset.position.y + (pageY - yInElement);
    afterX = calMagneticPositionX(afterX, selectedAsset.width, otherAssets);
    afterY = calMagneticPositionY(afterY, selectedAsset.height, otherAssets);
    callback(selectedAsset.id, afterX, afterY, selectedAsset.width, selectedAsset.height);
}

export function resize(
    target: string,
    xInElement: number,
    yInElement: number,
    pageX: number,
    pageY: number,
    selectedAsset: AnyAsset,
    otherAssets: AnyAsset[],
    callback: (id: number, x: number, y: number, width: number, height: number) => void) {
    const currentId = selectedAsset.id;
    const devX = (target.includes('left')) ? xInElement - pageX : pageX - xInElement;
    const devY = (target.includes('top')) ? yInElement - pageY : pageY - yInElement;
    const currentX = selectedAsset.position.x;
    const currentY = selectedAsset.position.y;
    const currentWidth = selectedAsset.width;
    const currentHeight = selectedAsset.height;
    let afterWidth = currentWidth + devX;
    let afterHeight = currentHeight + devY;
    let afterX = currentX - devX;
    let afterY = currentY - devY;
    if (currentWidth !== afterWidth) {
        afterWidth = calMagneticSizeX(afterX, afterWidth, otherAssets);
    }
    if (currentHeight !== afterHeight) {
        afterHeight = calMagneticSizeY(afterY, afterHeight, otherAssets);
    }
    if (selectedAsset.position.x !== afterX) {
        afterX = calMagneticPositionX(afterX, afterWidth, otherAssets);
    }
    if (selectedAsset.position.y !== afterY) {
        afterY = calMagneticPositionY(afterY, afterHeight, otherAssets);
    }
    if (afterWidth < 5 || afterHeight < 5) {
        return;
    }
    switch (target) {
        case RESIZE_TYPE_LEFT_TOP:
            callback(currentId, afterX, afterY, afterWidth, afterHeight);
            break;
        case RESIZE_TYPE_RIGHT_TOP:
            callback(currentId, currentX, afterY, afterWidth, afterHeight);
            break;
        case RESIZE_TYPE_LEFT_BOTTOM:
            callback(currentId, afterX, currentY, afterWidth, afterHeight);
            break;
        case RESIZE_TYPE_RIGHT_BOTTOM:
            callback(currentId, currentX, currentY, afterWidth, afterHeight);
            break;
        case RESIZE_TYPE_TOP:
            callback(currentId, currentX, afterY, currentWidth, afterHeight);
            break;
        case RESIZE_TYPE_LEFT:
            callback(currentId, afterX, currentY, afterWidth, currentHeight);
            break;
        case RESIZE_TYPE_BOTTOM:
            callback(currentId, currentX, currentY, currentWidth, afterHeight);
            break;
        case RESIZE_TYPE_RIGHT:
            callback(currentId, currentX, currentY, afterWidth, currentHeight);
            break;
    }
}

export function findNodeByType(type: string, child: HTMLElement): undefined | HTMLElement {
    let node = child.parentNode as HTMLElement;
    while (node != null && !!node.dataset) {
        if (node.dataset.type === type) {
            return node;
        }
        node = node.parentNode as HTMLElement;
    }
    return undefined;
}

export const calMagneticPosition = (type: 'x' | 'y', position: number, size: number, assets: AnyAsset[]) => {
    const sub = 100;
    let result = position;
    const endPosition = position + size;
    assets.forEach((asset: AnyAsset) => {
        const assetPosition = asset.position[type];
        const assetSize = asset[type === 'x' ? 'width' : 'height'];
        const assetEndPosition = assetPosition + assetSize;
        let abs = Math.abs(position - assetPosition);
        if (abs <= 2 && sub > abs) {
            result = assetPosition;
            return;
        }
        abs = Math.abs(endPosition - assetEndPosition);
        if (abs <= 3 && sub > abs) {
            result = position - (endPosition - assetEndPosition);
            return;
        }
        abs = Math.abs(position - assetEndPosition);
        if (abs <= 3 && sub > abs) {
            result = assetEndPosition;
            return;
        }
        abs = Math.abs(endPosition - assetPosition);
        if (abs <= 3 && sub > abs) {
            result = assetPosition - size;
            return;
        }
    })
    return result;
}

export const calMagneticSize = (type: 'x' | 'y', position: number, size: number, assets: AnyAsset[]) => {
    const sub = 100;
    let result = size;
    const endPosition = position + size;
    assets.forEach(asset => {
        const assetPosition = asset.position[type];
        const assetSize = asset[type === 'x' ? 'width' : 'height'];
        const assetEndPosition = assetPosition + assetSize;
        let abs = Math.abs(endPosition - assetPosition);
        if (abs <= 2 && sub > abs) {
            result = assetPosition - position;
            return;
        }
        abs = Math.abs(endPosition - assetEndPosition);
        if (abs <= 3 && sub > abs) {
            result = assetEndPosition - position;
            return;
        }
    })
    return result;
}


export const calGuideLine = (assets: AnyAsset[], selectedIndex: number) => {
    const guidelines: GuidelineModel[] = [];
    const selectedAsset = assets[selectedIndex];
    const selectedAssetX = selectedAsset.position.x;
    const selectedAssetY = selectedAsset.position.y;
    const selectedAssetWidth = selectedAsset.width;
    const selectedAssetHeight = selectedAsset.height;
    const selectedAssetXEnd = selectedAssetX + selectedAssetWidth;
    const selectedAssetYEnd = selectedAssetY + selectedAssetHeight;
    assets.forEach((asset, idx) => {
        if (selectedIndex !== idx) {
            const assetX = asset.position.x;
            const assetY = asset.position.y;
            const assetWidth = asset.width;
            const assetHeight = asset.height;
            const minY = Math.min(selectedAssetY, assetY);
            const height = Math.max(selectedAssetYEnd, assetY + assetHeight) - minY + 12;
            const minX = Math.min(selectedAssetX, assetX);
            const width = Math.max(selectedAssetXEnd, assetX + assetWidth) - minX + 12;
            if (selectedAssetX === assetX || selectedAssetX === (assetX + assetWidth)) {
                guidelines.push(new GuidelineModel(selectedAssetX + 6, minY, 0, height));
            }
            if (selectedAssetY === assetY || selectedAssetY === (assetY + assetHeight)) {
                guidelines.push(new GuidelineModel(minX, selectedAssetY + 6, width, 0));
            }
            if ((selectedAssetXEnd) === (assetX + assetWidth) || selectedAssetXEnd === assetX) {
                guidelines.push(new GuidelineModel(selectedAssetXEnd + 10, minY, 0, height));
            }
            if ((selectedAssetYEnd) === (assetY + assetHeight) || selectedAssetYEnd === assetY) {
                guidelines.push(new GuidelineModel(minX, selectedAssetYEnd + 10, width, 0));
            }
        }
    });
    return guidelines;
}