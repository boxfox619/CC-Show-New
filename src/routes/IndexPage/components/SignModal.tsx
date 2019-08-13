import * as React from 'react';
import * as Form from './form';
import styled from 'styled-components';
import { optional } from './../../../core/hoc/OptionalComponent';
import loginBackground from '../assets/bg_login_img.jpg';
import { RegisterPayload } from '../../../models/payload/RegisterPayload';
import { LoginPayload } from '../../../models/payload';
import { Modal } from '../../../components/Modal';

const LeftContainer = styled.div`
    background: url(${loginBackground});
    background-position: center;
    background-size: cover;
    position: relative;
    color: white;
    overflow: hidden;
    & > * {
        position: absolute;
    }
    &::before {
        content: ' ';
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: absolute;
    }
`

const Logo = styled.div`
    font-family: 'Sunflower';
    font-weight: 700;
    font-size: 1.5em;
    margin: 20px;
`

const Tags = styled.div`
    font-size: 2em;
    line-height: 1.5em;
    font-weight: bold;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`

const SigninForm = optional(Form.SigninForm);
const SignupForm = optional(Form.SignupForm);
interface Props {
    onSignin: (data: LoginPayload) => void
    onSignup: (data: RegisterPayload) => void
}

const SignModal: React.FC<Props> = ({ onSignin, onSignup }) => {
    const [signup, setSignup] = React.useState(false);
    const handleChangeMode = React.useCallback(() => setSignup(!signup), [signup, setSignup]);
    return (
        <Modal>
            <LeftContainer>
                <Logo>CC SHOW</Logo>
                <Tags>
                    <div>#쉽게  #편리하게</div>
                    <div>#화려하게  #빠르게</div>
                </Tags>
            </LeftContainer>
            <SigninForm visible={!signup} onSubmit={onSignin} onChangeMode={handleChangeMode} />
            <SignupForm visible={signup} onSubmit={onSignup} onChangeMode={handleChangeMode} />
        </Modal>
    )
}

export default optional(SignModal);