import * as React from 'react';
import AssetProps from './AssetProps';
import styled from 'styled-components';
import TextAsset from './TextAsset';

const Container = styled.div`
    width: 100%;
    height: 100%;
    ${(props: {isSelected: boolean}) => props.isSelected && `
        cursor: move !important;
    `}
`

export const AssetContext: React.FC<AssetProps> = (props: AssetProps) => {
    return (
        <Container isSelected={props.isSelected}>
            <TextAsset
                assetId={props.data.id}
                controllable={props.controllable}
                value={props.data.value}
                isSelected={props.isSelected && props.isDoubleClicked}
                handleChange={props.onValueChange}
            />
        </Container>
    );
};