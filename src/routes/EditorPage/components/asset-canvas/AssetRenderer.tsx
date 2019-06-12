import * as React from 'react';
import { useState, useCallback } from 'react';
import AssetModel from 'src/models/AssetModel';
import { Guideline } from './Guideline';
import { calGuideLine } from '../../modules/asset.service';
import { UpdateAssetValuePayload } from '../../models/payload';
import Asset from '../asset';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
`

interface OwnProps {
    assets: AssetModel[],
    selectedAssetId?: number,
    editable: boolean,
    doubleClicked: boolean,
    onChangeValue: (payload: UpdateAssetValuePayload) => void
}

type Props = OwnProps & React.HTMLAttributes<HTMLDivElement>;

export const AssetRenderer: React.FC<Props> = (props: Props) => {
    const {assets, selectedAssetId, editable, doubleClicked, onChangeValue, ...divProps} = props; 
    const [hoveredAssetIdx, setHoveredAsset] = useState(-1);
    const renderAssets = useCallback((assetList: AssetModel[]) => {
        return assetList.map((asset, idx) => {
            const isSelected = asset.id === selectedAssetId;
            const isHovered = idx === hoveredAssetIdx;
            const handleMouseHover = (hover: boolean) => setHoveredAsset(hover ? idx : -1);
            const onValueChange = (value: any) => onChangeValue({id: asset.id, value});
            return (
                <Asset
                    key={asset.id}
                    index={idx}
                    data={asset}
                    isSelected={isSelected}
                    isHovered={isHovered}
                    controllable={props.editable}
                    onMouseHover={handleMouseHover}
                    isDoubleClicked={props.doubleClicked}
                    onValueChange={onValueChange}
                />
            )
        })
    }, [hoveredAssetIdx, selectedAssetId]);
    const renderGuideLine = useCallback((assetList: AssetModel[]) => {
        if (hoveredAssetIdx < 0) { return; }
        return calGuideLine(assetList, hoveredAssetIdx).map((guideline, idx) => <Guideline key={idx} attr={guideline} />);
    }, [hoveredAssetIdx]);
    return (
        <Container {...divProps}>
            {renderAssets(assets)}
            {hoveredAssetIdx >= 0 && renderGuideLine(assets)}
        </Container>
    );
}