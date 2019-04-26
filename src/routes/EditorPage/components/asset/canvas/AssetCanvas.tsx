import * as React from 'react';
import { useState } from 'react';
import AssetModel from 'src/models/AssetModel';
import { AssetRenderer } from './AssetRenderer';
import { isResizer, isSelector, resize, move, findAsset, getResizeTarget } from '../../../modules/asset.service';
import { clearSelection } from 'src/routes/EditorPage/modules/dom.service';

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
    const { assets, selectedAssetId, editable, onSelectAsset, onChangeValue, modifyAsset, ...divProps } = props;
    const [doubleClicked, setDoubleClicked] = useState(false);
    const [mouseAction, setMouseAction] = useState(ACTION_NONE);
    const [xInElement, setXInElement] = useState(0);
    const [yInElement, setYInElement] = useState(0);
    const [resizeTarget, setResizeTarget] = useState('');

    const handleMouseMove = (e: React.MouseEvent) => {
        const currentAsset = assets.find(a => a.id === selectedAssetId);
        if (!currentAsset || !mouseAction || mouseAction === ACTION_NONE) {
            return;
        }
        if (currentAsset.type === 'ASSET_TYPE_VIDEO' && currentAsset.attr.preview) {
            setMouseAction(ACTION_NONE);
            return;
        }
        if (mouseAction === ACTION_MOVE) {
            handleMove(e);
        } else if (mouseAction === ACTION_RESIZE) {
            handleResize(e);
        }
    };

    const handleMove = (e: React.MouseEvent) => {
        const selectedAsset = assets.find(a => a.id === selectedAssetId);
        const otherAssets = assets.filter(a => a.id !== selectedAssetId);
        if (selectedAssetId === undefined || !selectedAsset || !otherAssets) {
            return;
        }
        const x = e.pageX;
        const y = e.pageY;
        move(xInElement, yInElement, x, y, selectedAsset, otherAssets, modifyAsset);
        setXInElement(x);
        setYInElement(y);
    };

    const handleResize = (e: React.MouseEvent) => {
        const selectedAsset = assets.find(a => a.id === selectedAssetId);
        const otherAssets = assets.filter(a => a.id !== selectedAssetId);
        if (selectedAssetId === undefined || !selectedAsset || !otherAssets) {
            return;
        }
        resize(resizeTarget, xInElement, yInElement, e.pageX, e.pageY, selectedAsset, otherAssets, modifyAsset);
        setXInElement(e.pageX);
        setYInElement(e.pageY);
    };

    const handleDoubleClickItem = () => {
        setDoubleClicked(true);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        if(document.activeElement){
            (document.activeElement as HTMLElement).blur();
        }
        const target = e.target as HTMLElement;
        const assetNode = findAsset(target);
        if (!assetNode) {
            setDoubleClicked(false);
            onSelectAsset(undefined);
            clearSelection();
            return
        }
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
            editable={editable} />
    )
}