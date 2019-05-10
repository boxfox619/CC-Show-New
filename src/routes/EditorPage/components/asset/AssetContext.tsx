import * as React from 'react';
import AssetProps from './AssetProps';
import styled from 'styled-components';
import TextAsset from './TextAsset';
import ImageAsset from './ImageAsset';
import AssetType from 'src/models/AssetType';

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
    [AssetType.Text]: (props: AssetProps) => (
        <TextAsset
                assetId={props.data.id}
                controllable={props.controllable}
                value={props.data.value}
                editing={props.isSelected && props.isDoubleClicked}
                handleChange={props.onValueChange}
            />
    ),
    [AssetType.Image]: (props: AssetProps) => (
        <ImageAsset value={props.data.value}/>
    )
}

export const AssetContext: React.FC<AssetProps> = (props: AssetProps) => {
    return (
        <Container>
            {!props.isDoubleClicked && <Cover/>}
            {asset[props.data.type](props)}
        </Container>
    );
};