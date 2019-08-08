import * as React from 'react';
import styled from 'styled-components';

interface Props {
    visible: boolean
    value: string
}

const VideoFrame = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
`

export const VideoAssetView: React.FC<Props> = ({ value }) => {
    const code = value.split("?v=")[1];
    return <VideoFrame src={`https://www.youtube.com/embed/${code}`} />
}
export default VideoAssetView;