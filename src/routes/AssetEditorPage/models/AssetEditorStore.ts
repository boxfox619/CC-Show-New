import { CustomAssetData } from "@/models";

export class AssetEditorStore {
  constructor(
    public data: CustomAssetData = { html: '', css: '', javascript: '' },
    public name: string = ''
  ) { }
}