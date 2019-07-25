import * as React from 'react';
import { FormProps } from './index';
import getFormData from '../../../../core/util/FormUtil';
import FormInput from './FormInput';
import { SigninPayload } from '../../models';
import SubmitButton from './SubmitButton';
import ErrorLabel from './ErrorLabel';


export const SigninForm: React.FC<FormProps<SigninPayload>> = ({ data = {} as SigninPayload, onSubmit, error }) => {
    const handleSubmit = React.useCallback((event: React.FormEvent) => onSubmit(getFormData<SigninPayload>(event)), [onSubmit]);
    return (
        <form onSubmit={handleSubmit}>
            <ErrorLabel>{error}</ErrorLabel>
            <FormInput label="아이디" name="email" type="text" required defaultValue={data.email} />
            <FormInput label="비밀번호" name="password" type="password" required defaultValue={data.password} />
            <SubmitButton type="submit">로그인</SubmitButton>
        </form>
    )
}