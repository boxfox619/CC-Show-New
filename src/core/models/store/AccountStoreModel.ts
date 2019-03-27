export default class AccountStoreModel {
    constructor(
        public isLogined: boolean = false,
        public isLoding: boolean = false,
        public name: string = '',
        public email: string = '',
        public thumbnail: string = ''
    ) {}
}