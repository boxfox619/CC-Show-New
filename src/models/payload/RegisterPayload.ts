import {LoginPayload} from '.';
export class RegisterPayload extends LoginPayload {
    constructor(
        email: string,
        password: string,
        public nickname: string
    ){
        super(email, password);
    }
}