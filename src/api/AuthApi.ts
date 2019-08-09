import axios from 'axios';
import { AuthUseCase } from '../core/domain';
import { LoginPayload } from '../models/payload/LoginPayload';
import { RegisterPayload } from '../models/payload/RegisterPayload';

export class AuthApi implements AuthUseCase {
    login = async (payload: LoginPayload) => {
        const { email, password } = payload;
        const res = await axios.post('/api/me/logon/', { email, password });
        return res.data.user;
    }

    register = async (payload: RegisterPayload) => {
        const { email, nickname, password } = payload;
        const res = await axios.post('/api/me/signup', { email, nickname, password });
        return res.data;
    }

    findPassword = async (email: string) => {
        const res = await axios.post('/api/me/password', { email });
        return res.data;
    }
    
    modifyNickname = async (name: string) => {
        const res = await axios.put('/api/me/name', { name });
        return res.status === 200;
    }
    
    modifyPassword = async (password: string) => {
        const res = await axios.put('/api/me/password', { password });
        return res.status === 200;
    }

    checkLogined = async () => {
        const res = await axios.get('/api/me/status/');
        return res.data;
    }

    logout = async () => {
        const res = await axios.delete('/api/me/logout/');
        return res.status === 200;
    }
}