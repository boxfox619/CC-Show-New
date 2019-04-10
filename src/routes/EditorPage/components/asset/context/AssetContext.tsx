import * as React from 'react';
import AssetProps from './AssetProps';
import styled from 'styled-components';
import TextAsset from './TextAsset';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const AssetContext: React.FC<AssetProps> = (props: AssetProps) => {
    return (
        <Container>
            <TextAsset
                assetId={props.data.id}
                controllable={props.controllable}
                value={props.data.value}
                edit={true}
                handleChange={props.onValueChange}
            />
        </Container>
    );
};