import * as React from 'react';
import { useState } from 'react';
import AssetModel from 'src/core/models/AssetModel';
import { Guideline } from './Guideline';
import { calGuideLine } from 'src/routes/EditorPage/modules/services/asset.service';

interface OwnProps {
    assets: AssetModel[],
    selectedAssetId?: number
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

export const AssetRenderer: React.FC<Props> = (props: Props) => {
    const [hoveredAsset, setHoveredAsset] = useState(-1);
    const [doubleClicked, setDoubleClicked] = useState(false);
    const selectedAssetIndex = props.assets.findIndex(a => a.id === props.selectedAssetId);
    const renderAssets = (assets: AssetModel[]) => {
        return assets.map((asset, idx) => {
            let isSelected = false;
            if (selectedAssetIndex === idx) {
                isSelected = true;
            }
            const handleMouseHover = (hover: boolean) => setHoveredAsset(hover ? idx : -1);
            return (
                <Asset
                    key={asset.id}
                    attribute={asset}
                    isSelected={isSelected}
                    onMouseHover={handleMouseHover}
                    doubleClicked={doubleClicked}
                    onChangeAttributes={this.props.onChangeAttributes}
                />
            )
        })
    };
    const renderGuideLine = (assets: AssetModel[]) => {
        if (hoveredAsset < 0) {
            return;
        }
        const guidelines = calGuideLine(assets, hoveredAsset);
        return guidelines.map((guideline, idx) => {
            return (<Guideline key={idx} attr={guideline} />)
        })
    }
    return (
        <div {...props as React.HTMLAttributes<HTMLDivElement>}>
            {renderAssets(props.assets)}
            {hoveredAsset >= 0 && renderGuideLine(props.assets)}
        </div>
    );
}