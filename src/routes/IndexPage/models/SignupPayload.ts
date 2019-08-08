import { SigninPayload } from '.';

export interface SignupPayload extends SigninPayload {
    email: string
    password: string
    nickname: string
}