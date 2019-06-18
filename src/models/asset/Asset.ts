import { CSSProperties } from 'react';
import AssetType from '../AssetType';
import Point from '../Point';

export interface Asset<V, T> {
    id: number
    type: AssetType
    width: number
    height: number
    position: Point
    value: V
    attribute: T
    style: CSSProperties
}

export interface AnyAsset extends Asset<any, any> {
    id: number
    type: AssetType
    width: number
    height: number
    position: Point
    value: any
    attribute: any
    style: CSSProperties
}