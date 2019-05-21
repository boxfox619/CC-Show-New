export class SortAssetPayload {
    constructor(public id: number, public index: number, public toEnd: boolean = false) {}

    public getTargetIndex(currentIdx: number, assetSize: number) {
        if(this.toEnd && this.index > 0) {
            return assetSize;
        } else if (this.toEnd && this.index < 0) {
            return 0;
        }
        return currentIdx + this.index;
    }
}