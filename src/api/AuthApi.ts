import axios from 'axios';

export const login = async (email: string, password: string) => {
    const res = await axios.post('/api/me/logon/', {email, password});
    return res.data.user;
}

export const register = async (email: string, name: string, password: string) => {
    const res = await axios.post('/api/me/signup', {email, name, password});
    return res.data;
}

export const findPassword = async (email: string) => {
    const res = await axios.post('/api/me/password', {email});
    return res.data;
}

export const modifyNickname = async (name: string) => {
    const res = await axios.put('/api/me/name', {name});
    return res.status === 200;
}

export const modifyPassword = async (password: string) => {
    const res = await axios.put('/api/me/password', {password});
    return res.status === 200;
}

export const checkLogined = async () => {
    const res = await axios.get('/api/me/status/');
    return res.data;
}

export const logout = async () => {
    const res = await axios.delete('/api/me/logout/');
    return res.status === 200;
}

export const withdraw = async () => {
    const res = await axios.delete('/api/me/');
    return res.status === 200;
}