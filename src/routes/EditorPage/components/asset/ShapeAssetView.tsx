import * as React from 'react';

interface Props {
    value: SVGElement
}

const ShapeAssetView: React.FC<Props> = ({ value }) => {
    return (
        <>
            {value}
        </>
    )
}

export default ShapeAssetView;