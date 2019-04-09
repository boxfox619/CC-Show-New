import * as React from 'react';
import { useState } from 'react';
import AssetModel from 'src/core/models/AssetModel';
import { Guideline } from './Guideline';
import { calGuideLine } from 'src/routes/EditorPage/modules/services/asset.service';
import { Asset } from '../Asset';

interface OwnProps {
    assets: AssetModel[],
    selectedAssetId?: number,
    editable: boolean,
    doubleClicked: boolean,
    onChangeValue: (id: number, value: any) => void
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

export const AssetRenderer: React.FC<Props> = (props: Props) => {
    const {assets, selectedAssetId, editable, doubleClicked, onChangeValue, ...divProps} = props; 
    const [hoveredAsset, setHoveredAsset] = useState(-1);
    const renderAssets = (assetList: AssetModel[]) => {
        return assetList.map((asset, idx) => {
            let isSelected = false;
            if (asset.id === selectedAssetId) {
                isSelected = true;
            }
            const handleMouseHover = (hover: boolean) => setHoveredAsset(hover ? idx : -1);
            const onValueChange = (value: any) => onChangeValue(asset.id, value);
            return (
                <Asset
                    key={asset.id}
                    data={asset}
                    isSelected={isSelected}
                    controllable={props.editable}
                    onMouseHover={handleMouseHover}
                    doubleClicked={props.doubleClicked}
                    onValueChange={onValueChange}
                />
            )
        })
    };
    const renderGuideLine = (assetList: AssetModel[]) => {
        if (hoveredAsset < 0) {
            return;
        }
        const guidelines = calGuideLine(assetList, hoveredAsset);
        return guidelines.map((guideline, idx) => {
            return (<Guideline key={idx} attr={guideline} />)
        })
    }
    return (
        <div {...divProps}>
            {renderAssets(assets)}
            {hoveredAsset >= 0 && renderGuideLine(assets)}
        </div>
    );
}