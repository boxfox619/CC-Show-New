import * as React from 'react';
import AssetProps from './AssetProps';
import styled from 'styled-components';
import TextAssetView from './TextAssetView';
import ImageAssetView from './ImageAssetView';
import AssetType from '../../../../models/AssetType';
import VideoAssetView from './VideoAssetView';
import { TextAsset, ImageAsset, VideoAsset, AnyAsset } from 'src/models';

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

const asset = {
    [AssetType.Text]: (props: AssetProps<TextAsset>) => (
        <TextAssetView
            assetId={props.data.id}
            controllable={props.controllable}
            value={props.data.value}
            editing={props.isSelected && props.isDoubleClicked}
            handleChange={props.onValueChange}
        />
    ),
    [AssetType.Image]: (props: AssetProps<ImageAsset>) => (
        <ImageAssetView value={props.data.value} />
    ),
    [AssetType.Video]: (props: AssetProps<VideoAsset>) => (
        <VideoAssetView visible={props.data.attribute.preview} value={props.data.value} />
    )
}

interface ContextProps {
    index: number
}

type Props = AssetProps<AnyAsset> & ContextProps;

export const AssetContext: React.FC<Props> = ({ index, ...assetProps }) => {
    return (
        <Container style={{ zIndex: index, ...assetProps.data.style }}>
            {!assetProps.isDoubleClicked && <Cover />}
            {asset[assetProps.data.type](assetProps)}
        </Container>
    );
};