import * as React from 'react';
import styled from 'styled-components';
import { VideoAssetData } from '@/models';

interface Props {
    data: VideoAssetData
}

const VideoFrame = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
`

export const VideoAssetView: React.FC<Props> = ({ data }) => {
    const code = data.url.split("?v=")[1];
    return <VideoFrame src={`https://www.youtube.com/embed/${code}`} />
}
export default VideoAssetView;