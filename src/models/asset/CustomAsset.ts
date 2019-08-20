import AssetType from '../AssetType';
import { Asset, Point, AssetAttribute } from '..';

export interface CustomAssetData {
  html: string
  css: string
  javascript: string
}

export class CustomAsset implements Asset<CustomAssetData> {
  public type = AssetType.Custom;
  public style = { borderStyle: 'solid', borderWidth: 0 };
  constructor(
    public id: number,
    public width: number,
    public height: number,
    public position: Point,
    public value: CustomAssetData = { html: '', css: '', javascript: '' },
    public attribute: AssetAttribute = { angle: 0 }
  ) { }
}