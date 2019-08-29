import { CustomAssetData } from "@/models";

export class AssetEditorStore {
  constructor(
    public data: CustomAssetData = { html: '<div class="test">\ncustom asset\n</div>', css: '.test {\ncolor: red;\n}', javascript: '' },
    public name: string = ''
  ) { }
}