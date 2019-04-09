import * as React from 'react';
import { useState } from 'react';
import AssetModel from 'src/core/models/AssetModel';
import { AssetRenderer } from './AssetRenderer';
import { isResizer, isSelector, calMagneticSizeX, calMagneticSizeY, calMagneticPositionX, calMagneticPositionY, findAsset, getResizeTarget } from './../../../modules/services/asset.service';

const ACTION_MOVE = 'move';
const ACTION_RESIZE = 'resize';
const ACTION_NONE = 'none';

interface OwnProps {
    assets: AssetModel[],
    selectedAssetId?: number,
    editable: boolean,
    onSelectAsset: (id?: number) => void,
    onChangeValue: (id: number, value: any) => void,
    modifyAsset: (id: number, x: number, y: number, width: number, height: number) => void,
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

export const AssetCanvas: React.FC<Props> = (props: Props) => {
    const {assets, selectedAssetId, editable, onSelectAsset, onChangeValue, modifyAsset, ...divProps} = props;
    const [doubleClicked, setDoubleClicked] = useState(false);
    const [mouseAction, setMouseAction] = useState(ACTION_NONE);
    const [xInElement, setXInElement] = useState(0);
    const [yInElement, setYInElement] = useState(0);
    const [resizeTarget, setResizeTarget] = useState('');

    const handleMouseMove = (e: React.MouseEvent) => {
        const currentAsset = assets.find(a => a.id === selectedAssetId);
        if (!!currentAsset && !!mouseAction) {
            if (currentAsset.type === 'ASSET_TYPE_VIDEO' && currentAsset.attr.preview) {
                setMouseAction(ACTION_NONE);
                return;
            }
            if (mouseAction === ACTION_MOVE) {
                move(e);
            } else if (mouseAction === ACTION_RESIZE) {
                resize(e);
            }
        }
    };

    const move = (e: React.MouseEvent) => {
        const selectedAsset = assets.find(a => a.id === selectedAssetId);
        const otherAssets = assets.filter(a => a.id !== selectedAssetId);
        if (!selectedAssetId || !selectedAsset || !otherAssets) {
            return;
        }
        const x = e.pageX;
        const y = e.pageY;
        let afterX = selectedAsset.position.x + (x - xInElement);
        let afterY = selectedAsset.position.y + (y - yInElement);
        afterX = calMagneticPositionX(afterX, selectedAsset.width, otherAssets);
        afterY = calMagneticPositionY(afterY, selectedAsset.height, otherAssets);
        setXInElement(x);
        setYInElement(y);
        modifyAsset(selectedAssetId, afterX, afterY, selectedAsset.width, selectedAsset.height);
    }

    const resize = (e: React.MouseEvent) => {
        const selectedAsset = assets.find(a => a.id === selectedAssetId);
        const otherAssets = assets.filter(a => a.id !== selectedAssetId);
        if (!selectedAssetId || !selectedAsset || !otherAssets) {
            return;
        }
        const devX = (resizeTarget.includes('left')) ? xInElement - e.pageX : e.pageX - xInElement;
        const devY = (resizeTarget.includes('top')) ? yInElement - e.pageY : e.pageY - yInElement;
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
        const currentId = selectedAssetId;
        switch (resizeTarget) {
            case 'topleft':
                modifyAsset(currentId, afterX, afterY, afterWidth, afterHeight);
                break;
            case 'topright':
                modifyAsset(currentId, currentX, afterY, afterWidth, afterHeight);
                break;
            case 'bottomleft':
                modifyAsset(currentId, afterX, currentY, afterWidth, afterHeight);
                break;
            case 'bottomright':
                modifyAsset(currentId, currentX, currentY, afterWidth, afterHeight);
                break;
            case 'top':
                modifyAsset(currentId, currentX, afterY, currentWidth, afterHeight);
                break;
            case 'left':
                modifyAsset(currentId, afterX, currentY, afterWidth, currentHeight);
                break;
            case 'bottom':
                modifyAsset(currentId, currentX, currentY, currentWidth, afterHeight);
                break;
            case 'right':
                modifyAsset(currentId, currentX, currentY, afterWidth, currentHeight);
                break;
        }
        setXInElement(e.pageX);
        setYInElement(e.pageY);
    }

    const handleDoubleClickItem = () => {
        setDoubleClicked(true);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        (document.activeElement as HTMLElement).blur();
        const target = e.target as HTMLElement;
        const assetNode = findAsset(target);
        if (assetNode) {
            const currentAssetId = Number(assetNode.dataset.id);
            if (selectedAssetId === currentAssetId && doubleClicked) {
                return;
            }
            if (isResizer(target)) {
                return;
            }
            setDoubleClicked(false);
            onSelectAsset(currentAssetId);
            if (isSelector(target)) {
                setMouseAction(ACTION_RESIZE);
                setResizeTarget(getResizeTarget(target));
            } else {
                setMouseAction(ACTION_MOVE);
            }
            setXInElement(e.pageX);
            setYInElement(e.pageY);
        } else {
            setDoubleClicked(false);
            onSelectAsset(undefined);
            // @TODO implement clearSelection();
        }
        e.preventDefault();
    };

    const handleMouseRelease = () => {
        setMouseAction(ACTION_NONE);
    };

    return (
        <AssetRenderer
            {...divProps}
            onDoubleClick={handleDoubleClickItem}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseRelease}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseRelease}
            doubleClicked={doubleClicked}
            onChangeValue={onChangeValue}
            selectedAssetId={selectedAssetId}
            assets={assets}
            editable={editable}/>
    )
}