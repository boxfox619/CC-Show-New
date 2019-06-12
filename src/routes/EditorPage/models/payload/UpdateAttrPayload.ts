export class UpdateAttrPayload {
    constructor(
        public id: number,
        public attrName: string,
        public value: any
    ) { }
}