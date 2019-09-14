import * as React from 'react';
import AssetProps from './AssetProps';
import styled from 'styled-components';
import TextAssetView from './TextAssetView';
import ImageAssetView from './ImageAssetView';
import AssetType from '../../models/AssetType';
import VideoAssetView from './VideoAssetView';
import ShapeAssetView from './ShapeAssetView';
import { TextAsset, ImageAsset, VideoAsset, AnyAsset, ShapeAsset, CustomAsset } from '@/models';
import { CustomAssetView } from './CustomAssetView';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const Cover = styled.div`
    width: 100%;
    height: 100%;
    cursor: move !important;
    position: absolute;
    z-index: 3;
`

const assetRenderer = (type: AssetType, props: AssetProps<any>) => {
    switch (type) {
        case AssetType.Text:
            const textAsset = props.data as TextAsset;
            return (<TextAssetView
                assetId={textAsset.id}
                controllable={props.controllable}
                value={textAsset.value}
                editing={props.isSelected && props.isDoubleClicked}
                handleChange={props.onValueChange}
            />)
        case AssetType.Image:
            const imageAsset = props.data as ImageAsset;
            return (<ImageAssetView value={imageAsset.value} />)
        case AssetType.Video:
            const videoAsset = props.data as VideoAsset;
            return (<VideoAssetView data={videoAsset.value} />)
        case AssetType.Shape:
            const shapeAsset = props.data as ShapeAsset;
            return (<ShapeAssetView asset={props.data} Shape={shapeAsset.value} />)
        case AssetType.Custom:
            const customAsset = props.data as CustomAsset;
            return (<CustomAssetView data={customAsset.value} />)
    }
}

interface ContextProps {
    index: number
}

type Props = AssetProps<AnyAsset> & ContextProps;

export const AssetContext: React.FC<Props> = React.memo(({ index, ...assetProps }) => {
    return (
        <Container style={{ zIndex: index, ...assetProps.data.style }}>
            {!assetProps.isDoubleClicked && <Cover />}
            {assetRenderer(assetProps.data.type, assetProps)}
        </Container>
    );
});