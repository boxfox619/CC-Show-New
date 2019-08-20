import AssetType from '../AssetType';
import { Asset, Point, AssetAttribute } from '..';
import { CSSProperties } from 'react';

export interface VideoAssetData {
    url: string
    preview: boolean
}

export class VideoAsset implements Asset<VideoAssetData> {
    public type: AssetType = AssetType.Video;
    public style: CSSProperties = { borderStyle: 'solid', borderWidth: 0 };
    constructor(
        public id: number,
        public width: number,
        public height: number,
        public position: Point,
        public value: VideoAssetData = {
            url: '',
            preview: false
        },
        public attribute: AssetAttribute = { angle: 0 }
    ) { }
}