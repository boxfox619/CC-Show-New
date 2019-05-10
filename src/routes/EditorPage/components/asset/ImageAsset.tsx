import * as React from 'react';
import styled from 'styled-components';

interface OwnProps {
    value: string
}

type Props = OwnProps & React.HTMLAttributes<HTMLImageElement>;

const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const ImageAsset: React.FC<Props> = ({value, ...imgProps}) => {
    const onDragStart = (e: React.MouseEvent) => e.preventDefault();
    return (
        <Image {...imgProps}
            onDragStart={onDragStart}
            src={value}
        />
    )
}
export default ImageAsset;