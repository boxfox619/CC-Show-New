import * as React from 'react';
import { FormProps } from './index';
import { SignupPayload } from '../../models/SignupPayload';
import getFormData from '../../../../core/util/FormUtil';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import ErrorLabel from './ErrorLabel';
import FormContainer from './FormContainer';
import SubLabel from './SubLabel';

interface SignupFormModel extends SignupPayload {
    passwordConfirm: string
}

export const SignupForm: React.FC<FormProps<SignupPayload>> = ({ data = {} as SignupPayload, onSubmit, error, onChangeMode }) => {
    const [localError, setError] = React.useState('');
    const handleSubmit = React.useCallback((event: React.FormEvent) => {
        const payload = getFormData<SignupFormModel>(event);
        (payload.password !== payload.passwordConfirm) ? setError('비밀번호가 일치하지 않음') : onSubmit(payload);
    }, [onSubmit, setError]);
    return (
        <FormContainer onSubmit={handleSubmit}>
            <ErrorLabel>{localError || error}</ErrorLabel>
            <FormInput label="아이디" name="email" placeholder="아이디를 입력해주세요" type="text" required defaultValue={data.email} />
            <FormInput label="별명" name="nickname" placeholder="별명을 입력해주세요" type="text" required defaultValue={data.nickname} />
            <FormInput label="비밀번호" name="password" placeholder="비밀번호를 입력해주세요" type="password" required defaultValue={data.password} />
            <FormInput label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호를 확인해주세요" type="password" required />
            <SubmitButton type="submit">회원가입</SubmitButton>
            <SubLabel onClick={onChangeMode}>계정이 이미 없으신가요?</SubLabel>
        </FormContainer>
    )
}