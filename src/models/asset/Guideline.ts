export class Guideline {
    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number
    ) { }

    get style() {
        return {
            left: this.x + 'px',
            top: this.y + 'px',
            width: this.width > 0 ? this.width + 'px' : undefined,
            height: this.height > 0 ? this.height + 'px' : undefined,
        }
    }
}

export default Guideline;