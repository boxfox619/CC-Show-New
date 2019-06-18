import * as React from 'react';
import styled from 'styled-components';
import { previewPlayIcon } from '../../assets';

interface OwnProps {
    visible: boolean
    value: string
}

type Props = OwnProps & React.HTMLAttributes<HTMLImageElement>;

const Blank = styled.img`
    width: 100%;
    height: 100%;
`
const VideoFrame = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
`

export const VideoAssetView: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ visible, value, ...divProps }) => {
    const code = value.split("?v=")[1];
    return (
        <div {...divProps}>
            {visible ? (<VideoFrame src={`https://www.youtube.com/embed/${code}`} />) : (<Blank><img src={previewPlayIcon} /></Blank>)}
        </div>
    )
}
export default VideoAssetView;