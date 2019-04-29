export class LoginResultPayload {
    constructor(
        public status: boolean,
        public name: string,
        public email: string
    ){}
}