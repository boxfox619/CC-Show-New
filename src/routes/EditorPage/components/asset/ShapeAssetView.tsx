import * as React from 'react';
import styled from 'styled-components';

const ShapeImg = styled.img`
`

interface Props {
    value: string
}

const ShapeAssetView: React.FC<Props> = ({ value }) => {
    return (
        <ShapeImg src={value} />
    )
}

export default ShapeAssetView;