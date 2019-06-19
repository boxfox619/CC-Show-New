import AssetType from '../AssetType';
import { Asset, Point } from '..';
import { CSSProperties } from 'react';

interface VideoAttribute {
    preview: boolean
}

export default class VideoAsset implements Asset<string, VideoAttribute> {
    public type: AssetType = AssetType.Video;
    public style: CSSProperties = { borderStyle: 'solid', borderWidth: 0 };
    constructor(
        public id: number,
        public width: number,
        public height: number,
        public position: Point,
        public value: string = '',
        public attribute: VideoAttribute = { preview: false },
    ) { }
}