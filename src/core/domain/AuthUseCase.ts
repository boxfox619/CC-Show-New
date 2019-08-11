import { LoginResultPayload } from '../../models/payload/LoginResultPayload';
import { LoginPayload } from '../../models/payload/LoginPayload';
import { RegisterPayload } from '../../models/payload';

export interface AuthUseCase {
    login: (payload: LoginPayload) => Promise<LoginResultPayload>
    register: (payload: RegisterPayload) => Promise<boolean>
    findPassword: (email: string) => Promise<boolean>
    modifyNickname: (name: string) => Promise<boolean>
    modifyPassword: (newPassword: string) => Promise<boolean>
    checkLogined: () => Promise<boolean>
    logout: () => Promise<boolean>
}