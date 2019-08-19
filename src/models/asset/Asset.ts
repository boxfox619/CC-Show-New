import { CSSProperties } from 'react';
import AssetType from '../AssetType';
import { Point } from '..';

export interface AssetAttribute {
    angle: number
}

export interface Asset<V> {
    id: number
    type: AssetType
    width: number
    height: number
    position: Point
    value: V
    style: CSSProperties
    attribute: AssetAttribute
}

export interface AnyAsset extends Asset<any> {
    id: number
    type: AssetType
    width: number
    height: number
    position: Point
    value: any
    style: CSSProperties
}