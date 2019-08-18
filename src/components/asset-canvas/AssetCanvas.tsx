import * as React from 'react';
import { useState } from 'react';
import { AssetType } from '../../models';
import { AssetRenderer } from './AssetRenderer';
import { isResizer, isSelector, resize, move, findAsset, getResizeTarget } from '../../routes/EditorPage/modules/asset.service';
import { clearSelection } from '../../routes/EditorPage/modules/dom.service';
import { UpdateAssetValuePayload } from '../../routes/EditorPage/models/payload';
import { AnyAsset } from '../../models/asset/Asset';

const ACTION_MOVE = 'move';
const ACTION_RESIZE = 'resize';
const ACTION_NONE = 'none';

interface OwnProps {
    assets: AnyAsset[],
    editable?: boolean,
    onSelectAsset?: (id?: number) => void,
    onChangeValue?: (payload: UpdateAssetValuePayload) => void,
    onModifyAsset?: (id: number, x: number, y: number, width: number, height: number) => void,
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

export const AssetCanvas: React.FC<Props> = ({ assets, editable = true, onSelectAsset, onChangeValue, onModifyAsset, ...divProps }) => {
    const [doubleClicked, setDoubleClicked] = useState(false);
    const [mouseAction, setMouseAction] = useState(ACTION_NONE);
    const [xInElement, setXInElement] = useState(0);
    const [yInElement, setYInElement] = useState(0);
    const [resizeTarget, setResizeTarget] = useState('');
    const [selectedAssetId, setSelecteAssetId] = useState<number>(undefined);
    const handleSelectAsset = React.useCallback((id?: number) => {
        setSelecteAssetId(id);
        onSelectAsset && onSelectAsset(id);
    }, [setSelecteAssetId, onSelectAsset]);
    const handleMove = React.useCallback((e: React.MouseEvent) => {
        if (!onModifyAsset) {
            return;
        }
        const selectedAsset = assets.find(a => a.id === selectedAssetId);
        const otherAssets = assets.filter(a => a.id !== selectedAssetId);
        if (selectedAssetId === undefined || !selectedAsset || !otherAssets) {
            return;
        }
        const x = e.pageX;
        const y = e.pageY;
        move(xInElement, yInElement, x, y, selectedAsset, otherAssets, onModifyAsset);
        setXInElement(x);
        setYInElement(y);
    }, [assets, onModifyAsset]);

    const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
        const currentAsset = assets.find(a => a.id === selectedAssetId);
        if (!currentAsset || !mouseAction || mouseAction === ACTION_NONE) {
            return;
        }
        if (currentAsset.type === AssetType.Video && currentAsset.attribute.preview) {
            setMouseAction(ACTION_NONE);
            return;
        }
        if (mouseAction === ACTION_MOVE) {
            handleMove(e);
        } else if (mouseAction === ACTION_RESIZE) {
            handleResize(e);
        }
    }, [selectedAssetId, assets, handleMove]);

    const handleResize = (e: React.MouseEvent) => {
        const selectedAsset = assets.find(a => a.id === selectedAssetId);
        const otherAssets = assets.filter(a => a.id !== selectedAssetId);
        if (selectedAssetId === undefined || !selectedAsset || !otherAssets) {
            return;
        }
        resize(resizeTarget, xInElement, yInElement, e.pageX, e.pageY, selectedAsset, otherAssets, onModifyAsset);
        setXInElement(e.pageX);
        setYInElement(e.pageY);
    };

    const handleDoubleClickItem = () => setDoubleClicked(true);

    const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        if (document.activeElement) {
            (document.activeElement as HTMLElement).blur();
        }
        const target = e.target as HTMLElement;
        const assetNode = findAsset(target);
        if (!assetNode) {
            setDoubleClicked(false);
            handleSelectAsset(undefined);
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
        handleSelectAsset(currentAssetId);
        if (isSelector(target)) {
            setMouseAction(ACTION_RESIZE);
            setResizeTarget(getResizeTarget(target));
        } else {
            setMouseAction(ACTION_MOVE);
        }
        setXInElement(e.pageX);
        setYInElement(e.pageY);
    }, [onSelectAsset]);

    const handleMouseRelease = () => setMouseAction(ACTION_NONE);

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
            assets={assets}
            editable={editable} />
    )
}