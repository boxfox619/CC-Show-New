export class AccountStore {
    constructor(
        public name: string = '',
        public email: string = '',
        public thumbnail: string = '',
        public isSigningIn: boolean = false,
        public isLogined: boolean = false,
        public isSigningOut: boolean = false,
        public isSigningUp: boolean = false,
        public isRegistred: boolean = false,
        public isLoginChecking: boolean = false,
        public isLoginChecked: boolean = false
    ) {}
}