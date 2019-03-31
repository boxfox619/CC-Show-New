import * as React from 'react';

interface Props {
    type: string,
    value: any,
    attr: object,
    style: React.CSSProperties,
    onValueChange: (value: any) => void
}

export const AssetContext: React.FC<Props> = (props: Props) => {
    return (
        <>
        </>
    )
}