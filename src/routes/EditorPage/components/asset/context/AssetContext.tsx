import * as React from 'react';
import AssetProps from './AssetProps';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const AssetContext: React.FC<AssetProps> = (props: AssetProps) => {
    return (
        <Container>
            asdasf
            {props.data.value}
        </Container>
    )
}