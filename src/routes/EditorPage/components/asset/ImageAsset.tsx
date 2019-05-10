import * as React from 'react';

interface OwnProps {
    value: string
}

type Props = OwnProps & React.HTMLAttributes<HTMLImageElement>;

export const ImageAsset: React.FC<Props> = ({value, ...imgProps}) => {
    const onDragStart = (e: React.MouseEvent) => e.preventDefault();
    return (
        <img {...imgProps}
            onDragStart={onDragStart}
            src={value}
        />
    )
}
export default ImageAsset;