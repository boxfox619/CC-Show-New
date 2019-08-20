import * as React from 'react';
import { ShapeAsset } from '@/models';
import { ShapeProps } from '@/core/assets/ShapeAsset';


interface Props {
    Shape: React.ComponentType<ShapeProps>
    asset: ShapeAsset
}

const ShapeAssetView: React.FC<Props> = ({ Shape, asset }) => {
    return (
        <Shape width={`${asset.width}px`}
            height={`${asset.height}px`}
            backgroundColor={asset.style.backgroundColor}
            borderColor={asset.style.borderColor}
            borderWidth={asset.style.borderWidth}
        />
    )
}

export default ShapeAssetView;