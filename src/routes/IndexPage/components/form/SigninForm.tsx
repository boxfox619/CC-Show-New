import * as React from 'react';
import { FormProps } from './index';
import getFormData from '../../../../core/util/FormUtil';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import ErrorLabel from './ErrorLabel';
import FormContainer from './FormContainer';
import SubLabel from './SubLabel';
import { LoginPayload } from '../../../../models/payload';

export const SigninForm: React.FC<FormProps<LoginPayload>> = ({ data = {} as LoginPayload, onSubmit, error, onChangeMode }) => {
    const handleSubmit = React.useCallback((event: React.FormEvent) => onSubmit(getFormData<LoginPayload>(event)), [onSubmit]);
    return (
        <FormContainer onSubmit={handleSubmit}>
            <ErrorLabel>{error}</ErrorLabel>
            <FormInput label="아이디" name="email" placeholder="아이디를 입력해주세요" type="text" required defaultValue={data.email} />
            <FormInput label="비밀번호" name="password" placeholder="비밀번호를 입력해주세요" type="password" required defaultValue={data.password} />
            <SubmitButton type="submit">로그인</SubmitButton>
            <SubLabel onClick={onChangeMode}>아직 계정이 없으신가요?</SubLabel>
        </FormContainer>
    )
}