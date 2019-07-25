import * as React from 'react';
import { FormProps } from './index';
import { SignupPayload } from '../../models/SignupPayload';
import getFormData from '../../../../core/util/FormUtil';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import ErrorLabel from './ErrorLabel';

interface SignupFormModel extends SignupPayload {
    passwordConfirm: string
}

export const SignupForm: React.FC<FormProps<SignupPayload>> = ({ data = {} as SignupPayload, onSubmit, error }) => {
    const [localError, setError] = React.useState('');
    const handleSubmit = React.useCallback((event: React.FormEvent) => {
        const payload = getFormData<SignupFormModel>(event);
        (payload.password !== payload.passwordConfirm) ? setError('비밀번호가 일치하지 않음') : onSubmit(payload);
    }, [onSubmit, setError]);
    return (
        <form onSubmit={handleSubmit}>
            <ErrorLabel>{localError || error}</ErrorLabel>
            <FormInput label="아이디" name="email" type="text" required defaultValue={data.email} />
            <FormInput label="이름" name="nickname" type="text" required defaultValue={data.nickname} />
            <FormInput label="비밀번호" name="password" type="password" required defaultValue={data.password} />
            <FormInput label="비밀번호 확인" name="passwordConfirm" type="password" required />
            <SubmitButton type="submit">회원가입</SubmitButton>
        </form>
    )
}